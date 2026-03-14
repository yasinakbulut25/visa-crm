import { useState, useCallback } from "react";
import { Alert, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { useDispatch } from "react-redux";
import AppModal from "@/components/modal/AppModal";
import { Upload } from "@/icons";
import ActionButton from "@/components/button/ActionButton";
import { updateDocument } from "@/store/slices/applicationSlice";
import type { Document } from "@/types/application";
import { showToast } from "@/utils";
import { fakeUpload } from "@/utils/fakeUpload";
import UploadLoading from "./UploadLoading";
import DropZone from "./DropZone";
import FilePreview from "./FilePreview";

export interface UploadedFile {
  file: File;
  preview?: string;
}

export type UploadState =
  | "idle"
  | "dragging"
  | "uploading"
  | "success"
  | "error";

function UploadDocumentAction({ doc }: { doc: Document }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const resetState = useCallback(() => {
    setUploadedFile(null);
    setUploadState("idle");
    setErrorMessage("");
  }, []);

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleFileSelect = useCallback((file: File) => {
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setErrorMessage("File size exceeds 10MB limit.");
      setUploadState("error");
      return;
    }

    setErrorMessage("");
    setUploadState("idle");

    const isImage = file.type.startsWith("image/");
    if (isImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFile({ file, preview: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      setUploadedFile({ file });
    }
  }, []);

  const handleUpload = async () => {
    if (!uploadedFile) return;

    setUploadState("uploading");
    setErrorMessage("");

    try {
      const result = await fakeUpload(uploadedFile.file, 1200);

      if (result.success) {
        dispatch(
          updateDocument({
            docId: doc.id,
            data: {
              status: "uploaded",
              uploadedDate: result.uploadedDate,
            },
          }),
        );

        setUploadState("success");
        showToast({ title: "Uploaded successfully!", color: "success" });
      } else {
        setUploadState("error");
        setErrorMessage(result.error);
      }
    } catch {
      setUploadState("error");
      setErrorMessage("Unexpected error. Please try again.");
    }
  };

  const isUploading = uploadState === "uploading";
  const isSuccess = uploadState === "success";

  return (
    <>
      <ActionButton
        onPress={onOpen}
        variant="solid"
        color="dark"
        startContent={<Upload width={20} color="#fff" />}
        aria-label="Upload Document"
      >
        Upload
      </ActionButton>

      <AppModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Upload Document"
        description="Supported formats: PDF, JPG, PNG, DOC"
      >
        <ModalBody className="py-5 flex flex-col gap-4">
          {isUploading ? (
            <UploadLoading fileName={uploadedFile?.file.name} />
          ) : (
            <>
              <DropZone
                uploadState={uploadState}
                onFileSelect={handleFileSelect}
                onDragChange={(dragging) =>
                  setUploadState(dragging ? "dragging" : "idle")
                }
              />

              {uploadedFile && (
                <FilePreview
                  uploadedFile={uploadedFile}
                  onRemove={resetState}
                />
              )}

              {errorMessage && (
                <Alert color="danger" description={errorMessage} />
              )}
            </>
          )}
        </ModalBody>

        {!isSuccess && (
          <ModalFooter className="gap-2">
            {uploadState === "error" ? (
              <ActionButton
                onPress={handleUpload}
                variant="solid"
                color="primary"
                aria-label="Retry"
              >
                Retry
              </ActionButton>
            ) : (
              <>
                <ActionButton
                  variant="light"
                  color="default"
                  onPress={handleClose}
                  className="font-medium text-text-secondary rounded-xl"
                  aria-label="Cancel"
                >
                  Cancel
                </ActionButton>
                <ActionButton
                  onPress={handleUpload}
                  isDisabled={!uploadedFile || isUploading}
                  isLoading={isUploading}
                  variant="solid"
                  color="primary"
                  aria-label="Upload"
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </ActionButton>
              </>
            )}
          </ModalFooter>
        )}
      </AppModal>
    </>
  );
}

export default UploadDocumentAction;
