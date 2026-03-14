import { Upload } from "@/icons";
import { useCallback, useRef } from "react";
import type { UploadState } from "./UploadDocumentAction";
import clsx from "clsx";

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
      className={clsx(
        "relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 flex flex-col items-center justify-center gap-3 p-10",
        {
          "border-text-tertiary bg-color-secondary/20": isDragging,
          "border-border-default bg-color-light hover:border-text-tertiary":
            !isDragging,
        },
      )}
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

export default DropZone;
