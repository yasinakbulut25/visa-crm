import ActionButton from "@/components/button/ActionButton";
import { More } from "@/icons";
import { updateDocument } from "@/store/slices/applicationSlice";
import type { Document, DocumentStatus } from "@/types/application";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import moment from "moment";
import { useDispatch } from "react-redux";

function MoreActions({ doc }: { doc: Document }) {
  const dispatch = useDispatch();

  const handleUpdateDoc = (status: DocumentStatus) => {
    dispatch(
      updateDocument({
        docId: doc.id,
        data: {
          status: status,
          uploadedDate: moment().format("YYYY-MM-DD"),
        },
      }),
    );
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <ActionButton
          variant="light"
          color="default"
          isIconOnly
          aria-label="More"
        >
          <More width={20} height={20} />
        </ActionButton>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions">
        <DropdownItem key="approve" onClick={() => handleUpdateDoc("approved")}>
          Approve Document
        </DropdownItem>
        <DropdownItem key="reject" onClick={() => handleUpdateDoc("rejected")}>
          Reject Document
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default MoreActions;
