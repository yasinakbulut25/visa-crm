import type { Document } from "@/types/application";
import { Edit, FileText, More } from "@/icons";
import ActionButton from "../button/ActionButton";
import UploadDocumentAction from "./actions/UploadDocumentAction";

function DocumentActions({ doc }: { doc: Document }) {
  const isMissing = doc.status === "missing";
  const isRevision = doc.status === "revision_requested";

  return (
    <div className="flex items-center gap-3">
      {isRevision && doc.revisionNote && (
        <ActionButton
          className="bg-white border text-sm font-semibold border-border-tertiary text-text-default"
          startContent={<Edit width={20} />}
        >
          View Note
        </ActionButton>
      )}

      {isMissing ? (
        <UploadDocumentAction doc={doc} />
      ) : (
        <ActionButton
          className="bg-white border text-sm font-semibold border-border-tertiary text-text-default"
          startContent={<FileText width={20} />}
        >
          View Doc
        </ActionButton>
      )}

      <ActionButton variant="light" isIconOnly>
        <More width={20} height={20} />
      </ActionButton>
    </div>
  );
}

export default DocumentActions;
