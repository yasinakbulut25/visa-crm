import ActionButton from "../button/ActionButton";
import { ArrowRight } from "@/icons";
import { useDispatch, useSelector } from "react-redux";
import { moveToNextStage } from "@/store/slices/applicationSlice";
import { ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import AppModal from "../modal/AppModal";
import { selectApplication } from "@/store/selectors/applicationSelectors";

function NextStageButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const application = useSelector(selectApplication);
  const currentIndex = application.stages.findIndex(
    (s) => s.key === application.currentStage,
  );
  const currentStage = application.stages[currentIndex];

  const nextStage = application.stages[currentIndex + 1] || null;

  const isDisabled = !nextStage || currentStage.status === "rejected";

  const handleNextStage = () => {
    if (nextStage) {
      dispatch(moveToNextStage());
    }
    onClose();
  };

  return (
    <>
      <ActionButton
        endContent={<ArrowRight width={20} height={20} />}
        color="primary"
        onPress={onOpen}
        isDisabled={isDisabled}
        aria-label="Move to Next Stage"
      >
        <span className="lg:flex hidden">
          {isDisabled ? "Final Stage" : "Move to Next Stage"}
        </span>
      </ActionButton>

      <AppModal
        isOpen={isOpen}
        onClose={onClose}
        title="Move to Next Stage"
        description="You can move to next stage your application"
      >
        <ModalBody className="py-5 flex flex-col gap-4">
          <p className="text-text-default text-base">
            Are you sure to move from <b>{currentStage.label}</b> to{" "}
            <b>{nextStage?.label}</b>?
          </p>
        </ModalBody>
        <ModalFooter>
          <ActionButton
            variant="light"
            color="default"
            onPress={onClose}
            className="font-medium text-text-secondary rounded-xl"
            aria-label="Cancel"
          >
            Cancel
          </ActionButton>
          <ActionButton
            onPress={handleNextStage}
            variant="solid"
            color="primary"
            aria-label="Upload"
          >
            Move
          </ActionButton>
        </ModalFooter>
      </AppModal>
    </>
  );
}

export default NextStageButton;
