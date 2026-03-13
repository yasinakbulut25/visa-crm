import { useRef, useState, useCallback } from "react";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { useDispatch } from "react-redux";
import moment from "moment";
import AppModal from "@/components/modal/AppModal";
import { Check, FileText, Upload, XIcon } from "@/icons";
import ActionButton from "@/components/button/ActionButton";
import { updateDocument } from "@/store/slices/applicationSlice";
import type { Document } from "@/types/application";

interface UploadedFile {
  file: File;
  preview?: string;
}

type UploadState = "idle" | "dragging" | "uploading" | "success" | "error";

interface FilePreviewProps {
  uploadedFile: UploadedFile;
  onRemove: () => void;
}

function FilePreview({ uploadedFile, onRemove }: FilePreviewProps) {
  const { file, preview } = uploadedFile;
  const isImage = file.type.startsWith("image/");
  const sizeKB = (file.size / 1024).toFixed(1);

  return (
    <div className="flex items-center gap-3 p-3 bg-color-light border border-border-default rounded-xl">
      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
        {isImage && preview ? (
          <img
            src={preview}
            alt={file.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <FileText />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-text-default truncate">
          {file.name}
        </p>
        <p className="text-xs text-text-secondary">{sizeKB} KB</p>
      </div>

      <ActionButton
        onPress={onRemove}
        variant="light"
        size="sm"
        aria-label="Remove file"
      >
        <XIcon />
      </ActionButton>
    </div>
  );
}

interface DropZoneProps {
  uploadState: UploadState;
  onFileSelect: (file: File) => void;
  onDragChange: (dragging: boolean) => void;
}

function DropZone({ uploadState, onFileSelect, onDragChange }: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      onDragChange(false);
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect, onDragChange],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  const isDragging = uploadState === "dragging";

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        onDragChange(true);
      }}
      onDragLeave={() => onDragChange(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`
        relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200
        flex flex-col items-center justify-center gap-3 p-10
        ${
          isDragging
            ? "border-text-tertiary bg-color-secondary/20"
            : "border-border-default bg-color-light hover:border-text-tertiary"
        }
      `}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
      />

      <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors bg-white shadow">
        <Upload />
      </div>

      <div className="text-center">
        <p className="text-sm font-semibold text-text-secondary">
          {isDragging ? "Drop your file here" : "Drag & drop your file here"}
        </p>
        <p className="text-xs text-text-tertiary mt-1">
          or <span className="font-semibold">browse files</span>
        </p>
      </div>

      <p className="text-xs text-text-tertiary">
        PDF, JPG, PNG, DOC up to 10MB
      </p>
    </div>
  );
}

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
      await new Promise((resolve) => setTimeout(resolve, 500));

      dispatch(
        updateDocument({
          docId: doc.id,
          data: {
            status: "uploaded",
            uploadedDate: moment().format("YYYY-MM-DD"),
          },
        }),
      );

      setUploadState("success");
    } catch {
      setUploadState("error");
      setErrorMessage("Upload failed. Please try again.");
    }
  };

  const isUploading = uploadState === "uploading";
  const isSuccess = uploadState === "success";

  return (
    <>
      <ActionButton
        onPress={onOpen}
        className="bg-color-neutral text-sm font-semibold text-white"
        startContent={<Upload width={20} color="#fff" />}
      >
        Upload
      </ActionButton>

      <AppModal isOpen={isOpen} onClose={handleClose}>
        <ModalHeader className="flex flex-col gap-0.5">
          <h2 className="text-base font-semibold text-text-default">
            Upload Document
          </h2>
          <p className="text-xs font-normal text-gray-400">
            Supported formats: PDF, JPG, PNG, DOC
          </p>
        </ModalHeader>

        <ModalBody className="py-5 flex flex-col gap-4">
          {isSuccess ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check />
              </div>
              <p className="text-sm font-medium text-text-default">
                Uploaded successfully!
              </p>
            </div>
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
                <p className="text-xs text-red-500 text-center">
                  {errorMessage}
                </p>
              )}
            </>
          )}
        </ModalBody>

        {!isSuccess && (
          <ModalFooter className="gap-2">
            <ActionButton
              variant="light"
              onPress={handleClose}
              className="font-medium text-text-secondary rounded-xl"
            >
              Cancel
            </ActionButton>
            <ActionButton
              onPress={handleUpload}
              isDisabled={!uploadedFile || isUploading}
              isLoading={isUploading}
              variant="bordered"
              className="border-none bg-color-primary"
            >
              {isUploading ? "Uploading..." : "Upload"}
            </ActionButton>
          </ModalFooter>
        )}
      </AppModal>
    </>
  );
}

export default UploadDocumentAction;
