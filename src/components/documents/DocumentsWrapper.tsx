import { selectDocuments } from "@/store/selectors/applicationSelectors";
import { useSelector } from "react-redux";
import DocumentCard from "./DocumentCard";

function DocumentsWrapper() {
  const documents = useSelector(selectDocuments);

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-[32px] font-bold text-text-default leading-8">
          Document Management
        </h1>
        <p className="text-sm font-light text-text-secondary leading-5">
          Review and manage application documents
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}

export default DocumentsWrapper;
