import { useDispatch } from "react-redux";
import moment from "moment";
import { showToast } from "@/utils";
import ActionButton from "@/components/button/ActionButton";
import { updateDocument } from "@/store/slices/applicationSlice";
import type { Document, DocumentStatus } from "@/types/application";

function RequestAgainAction({ doc }: { doc: Document }) {
  const dispatch = useDispatch();

  const handleRequestAgain = () => {
    dispatch(
      updateDocument({
        docId: doc.id,
        data: {
          status: "revision_requested" as DocumentStatus,
          uploadedDate: moment().format("YYYY-MM-DD"),
        },
      }),
    );
    showToast({ title: "Revision Requested", color: "success" });
  };

  return (
    <ActionButton
      onPress={handleRequestAgain}
      variant="solid"
      color="dark"
      aria-label="Request Again"
    >
      Request Again
    </ActionButton>
  );
}

export default RequestAgainAction;
