import type { Document } from "@/types/application";
import { Edit, FileText, More, Upload } from "@/icons";
import ActionButton from "../button/ActionButton";

interface DocumentActionsProps {
  doc: Document;
  onViewDoc?: (id: string) => void;
  onUpload?: (id: string) => void;
  onViewNote?: (note: string) => void;
}

function DocumentActions({
  doc,
  onViewDoc,
  onUpload,
  onViewNote,
}: DocumentActionsProps) {
  const isMissing = doc.status === "missing";
  const isRevision = doc.status === "revision_requested";

  return (
    <div className="flex items-center gap-3">
      {isRevision && doc.revisionNote && (
        <ActionButton
          onPress={() => onViewNote?.(doc.revisionNote!)}
          className="bg-white border text-sm font-semibold border-border-tertiary text-text-default"
          startContent={<Edit width={20} />}
        >
          View Note
        </ActionButton>
      )}

      {isMissing ? (
        <ActionButton
          onPress={() => onUpload?.(doc.id)}
          className="bg-color-neutral text-sm font-semibold text-white"
          startContent={<Upload width={20} color="#fff" />}
        >
          Upload
        </ActionButton>
      ) : (
        <ActionButton
          onPress={() => onViewDoc?.(doc.id)}
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
