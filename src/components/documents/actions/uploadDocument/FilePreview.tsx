import { FileText, XIcon } from "@/icons";
import type { UploadedFile } from "./UploadDocumentAction";
import ActionButton from "@/components/button/ActionButton";

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
        color="default"
        size="sm"
        aria-label="Remove file"
      >
        <XIcon />
      </ActionButton>
    </div>
  );
}

export default FilePreview;
