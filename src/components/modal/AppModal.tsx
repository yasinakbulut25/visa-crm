import {
  Modal,
  ModalContent,
  ModalHeader,
  type ModalProps,
} from "@heroui/react";

interface AppModalProps extends Omit<ModalProps, "children"> {
  children: React.ReactNode;
  title: string;
  description: string;
}

function AppModal({ children, title, description, ...props }: AppModalProps) {
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
      <ModalContent>
        <ModalHeader className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-text-default">{title}</h2>
          <p className="text-sm font-normal text-text-secondary">
            {description}
          </p>
        </ModalHeader>
        {children}
      </ModalContent>
    </Modal>
  );
}

export default AppModal;
