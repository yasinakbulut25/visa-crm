import type { Document } from "@/types/application";
import { More } from "@/icons";
import ActionButton from "../button/ActionButton";
import UploadDocumentAction from "./actions/uploadDocument/UploadDocumentAction";
import ViewNoteAction from "./actions/viewNote/ViewNoteAction";
import ViewDocumentAction from "./actions/viewDocument/ViewDocumentAction";

function DocumentActions({ doc }: { doc: Document }) {
  const isMissing = doc.status === "missing";
  const isRevision = doc.status === "revision_requested";

  return (
    <div className="flex items-center gap-3">
      {isRevision && doc.revisionNote && <ViewNoteAction doc={doc} />}

      {isMissing ? (
        <UploadDocumentAction doc={doc} />
      ) : (
        <ViewDocumentAction doc={doc} />
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
