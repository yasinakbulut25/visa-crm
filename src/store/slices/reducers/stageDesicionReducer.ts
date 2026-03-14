import type { IApplicationState, StageStatus } from "@/types/application";

export type stageDesicionPayload = {
  key: string;
  status: Extract<StageStatus, "rejected" | "approved">;
};

export const stageDesicionReducer = (
  state: IApplicationState,
  payload: stageDesicionPayload,
) => {
  const { key, status } = payload;

  const stages = state.application.stages;
  const targetIndex = stages.findIndex((s) => s.key === key);

  if (targetIndex === -1) return;

  // REJECT
  if (status === "rejected") {
    stages[targetIndex].status = "rejected";
    stages[targetIndex].completedDate = new Date().toISOString();
    return;
  }

  // APPROVE
  const lastIndex = stages.length - 1;

  stages.forEach((stage, index) => {
    if (index < lastIndex) {
      stage.status = "completed";
      stage.completedDate = new Date().toISOString();
    }

    if (index === lastIndex) {
      stage.status = "approved";
      stage.completedDate = new Date().toISOString();
    }
  });

  state.application.currentStage = stages[lastIndex].key;
};
