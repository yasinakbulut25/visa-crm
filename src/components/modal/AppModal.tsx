import { Modal, ModalContent, type ModalProps } from "@heroui/react";

interface AppModalProps extends Omit<ModalProps, "children"> {
  children: React.ReactNode;
}

function AppModal({ children, ...props }: AppModalProps) {
  return (
    <Modal
      radius="lg"
      size="lg"
      classNames={{
        base: "rounded-2xl",
        header: "border-b border-border-default pb-4",
        footer: "border-t border-border-default pt-4",
        closeButton: "cursor-pointer",
      }}
      {...props}
    >
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

export default AppModal;
