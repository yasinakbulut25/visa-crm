import { Upload } from "@/icons";

function UploadLoading({ fileName }: { fileName?: string }) {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <div className="relative w-20 h-20">
        <span className="absolute inset-0 rounded-full bg-color-primary/30 animate-ping" />
        <div className="relative w-20 h-20 rounded-full bg-color-primary/20 flex items-center justify-center">
          <Upload width={32} height={32} className="animate-bounce" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="w-full h-1.5 bg-color-primary/30 rounded-full overflow-hidden">
          <div className="h-full bg-color-primary rounded-full animate-upload-progress" />
        </div>
        <div className="flex justify-between text-xs text-text-secondary">
          <span className="truncate max-w-50">{fileName}</span>
          <span>Uploading...</span>
        </div>
      </div>
    </div>
  );
}

export default UploadLoading;
