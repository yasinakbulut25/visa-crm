import { ModalBody, ModalFooter, Skeleton, useDisclosure } from "@heroui/react";
import ActionButton from "@/components/button/ActionButton";
import AppModal from "@/components/modal/AppModal";
import { FileText } from "@/icons";
import type { Document } from "@/types/application";
import { useState } from "react";
import moment from "moment";

function ViewDocumentAction({ doc }: { doc: Document }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpen = () => {
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 800);
    onOpen();
  };

  return (
    <>
      <ActionButton
        onPress={handleOpen}
        variant="bordered"
        color="default"
        startContent={<FileText width={20} />}
        aria-label="View Doc"
      >
        View Doc
      </ActionButton>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        title="View Document"
        description={`Uploaded at: ${moment(doc.uploadedDate).format("MMM D, YYYY")}`}
      >
        <ModalBody className="py-5 flex flex-col gap-4">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <img
              alt="Document"
              width={500}
              height={300}
              src="https://placehold.co/500x300"
              className="w-full rounded-lg"
            />
          </Skeleton>
        </ModalBody>

        <ModalFooter className="gap-2">
          <ActionButton
            variant="light"
            color="default"
            onPress={onClose}
            className="font-medium text-text-secondary rounded-xl"
            aria-label="Close"
          >
            Close
          </ActionButton>
        </ModalFooter>
      </AppModal>
    </>
  );
}

export default ViewDocumentAction;
