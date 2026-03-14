import type { Document } from "@/types/application";
import UploadDocumentAction from "./actions/uploadDocument/UploadDocumentAction";
import ViewNoteAction from "./actions/viewNote/ViewNoteAction";
import ViewDocumentAction from "./actions/viewDocument/ViewDocumentAction";
import MoreActions from "./actions/moreActions/MoreActions";
import RequestAgainAction from "./actions/requestAgain/RequestAgainAction";

function DocumentActions({ doc }: { doc: Document }) {
  const isMissing = doc.status === "missing";
  const isRevision = doc.status === "revision_requested";
  const isRejected = doc.status === "rejected";

  return (
    <div className="flex items-center gap-3">
      {isRevision && doc.revisionNote && <ViewNoteAction doc={doc} />}

      {isMissing ? (
        <UploadDocumentAction doc={doc} />
      ) : (
        <ViewDocumentAction doc={doc} />
      )}

      {isRejected && <RequestAgainAction doc={doc} />}

      <MoreActions doc={doc} />
    </div>
  );
}

export default DocumentActions;
