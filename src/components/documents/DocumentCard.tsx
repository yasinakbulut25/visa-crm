import type { Document } from "@/types/application";
import StatusBadge from "./StatusBadge";
import moment from "moment";
import DocumentActions from "./DocumentActions";

function DocumentCard({ doc }: { doc: Document }) {
  const isMissing = doc.status === "missing";
  const isRejected = doc.status === "rejected";

  return (
    <div
      className={`group flex items-center justify-between p-6 ${isRejected ? "bg-[#FEE9E7]" : "bg-white hover:bg-color-light"} border border-border-default rounded-xl transition-all duration-200`}
    >
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

      <DocumentActions doc={doc} />
    </div>
  );
}

export default DocumentCard;
