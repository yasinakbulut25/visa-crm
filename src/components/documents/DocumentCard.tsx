import type { Document } from "@/types/application";
import StatusBadge from "./StatusBadge";
import moment from "moment";
import DocumentActions from "./DocumentActions";

interface DocumentCardProps {
  doc: Document;
  onViewDoc?: (id: string) => void;
  onUpload?: (id: string) => void;
  onViewNote?: (note: string) => void;
}

function DocumentCard({
  doc,
  onViewDoc,
  onUpload,
  onViewNote,
}: DocumentCardProps) {
  const isMissing = doc.status === "missing";

  return (
    <div className="group flex items-center justify-between p-6 bg-white border border-border-default rounded-xl hover:bg-color-light transition-all duration-200">
      <div className="flex flex-col gap-1">
        <StatusBadge status={doc.status} />
        <h3 className="text-[20px] text-text-default font-bold leading-8">
          {doc.name}
        </h3>
        <p className="text-sm text-text-secondary font-light leading-5">
          {isMissing
            ? "Not uploaded yet"
            : `Uploaded: ${moment(doc.uploadedDate).format("MMM D, YYYY")}`}
        </p>
      </div>

      <DocumentActions
        doc={doc}
        onViewDoc={onViewDoc}
        onUpload={onUpload}
        onViewNote={onViewNote}
      />
    </div>
  );
}

export default DocumentCard;
