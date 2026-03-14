import type { Document } from "@/types/application";
import { FileText, More } from "@/icons";
import ActionButton from "../button/ActionButton";
import UploadDocumentAction from "./actions/UploadDocumentAction";
import ViewNoteAction from "./actions/ViewNoteAction";

function DocumentActions({ doc }: { doc: Document }) {
  const isMissing = doc.status === "missing";
  const isRevision = doc.status === "revision_requested";

  return (
    <div className="flex items-center gap-3">
      {isRevision && doc.revisionNote && <ViewNoteAction doc={doc} />}

      {isMissing ? (
        <UploadDocumentAction doc={doc} />
      ) : (
        <ActionButton
          variant="bordered"
          color="default"
          startContent={<FileText width={20} />}
          aria-label="View Doc"
        >
          View Doc
        </ActionButton>
      )}

      <ActionButton
        variant="light"
        color="default"
        isIconOnly
        aria-label="More"
        >
        <More width={20} height={20} />
      </ActionButton>
    </div>
  );
}

export default DocumentActions;
