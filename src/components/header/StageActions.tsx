import ActionButton from "@/components/button/ActionButton";
import { More } from "@/icons";
import { selectCurrentStage } from "@/store/selectors/applicationSelectors";
import { stageDesicion } from "@/store/slices/applicationSlice";
import type { StageStatus } from "@/types/application";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useDispatch, useSelector } from "react-redux";

function StageActions() {
  const dispatch = useDispatch();
  const currentStage = useSelector(selectCurrentStage);

  const handleStageDesicion = (
    status: Extract<StageStatus, "rejected" | "approved">,
  ) => {
    dispatch(
      stageDesicion({
        key: currentStage,
        status: status,
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
        <DropdownItem
          key="approve"
          onClick={() => handleStageDesicion("approved")}
        >
          Approve Stage
        </DropdownItem>
        <DropdownItem
          key="reject"
          onClick={() => handleStageDesicion("rejected")}
        >
          Reject Stage
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default StageActions;
