import ActionButton from "@/components/button/ActionButton";
import AppModal from "@/components/modal/AppModal";
import { Edit } from "@/icons";
import type { Document } from "@/types/application";
import { ModalBody, ModalFooter, useDisclosure } from "@heroui/react";

function ViewNoteAction({ doc }: { doc: Document }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ActionButton
        onPress={onOpen}
        variant="bordered"
        color="default"
        startContent={<Edit width={20} />}
      >
        View Note
      </ActionButton>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        title="View Note"
        description="View revision note detail"
      >
        <ModalBody className="py-5 flex flex-col gap-4">
          <p className="text-base text-text-default font-medium">
            {doc.revisionNote}
          </p>
        </ModalBody>

        <ModalFooter className="gap-2">
          <ActionButton
            variant="light"
            color="default"
            onPress={onClose}
            className="font-medium text-text-secondary rounded-xl"
          >
            Close
          </ActionButton>
        </ModalFooter>
      </AppModal>
    </>
  );
}

export default ViewNoteAction;
