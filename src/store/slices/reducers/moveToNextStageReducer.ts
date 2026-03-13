import type { IApplicationState } from "@/types/application";

export const moveToNextStageReducer = (state: IApplicationState) => {
  const currentIndex = state.application.stages.findIndex(
    (s) => s.key === state.application.currentStage
  );
  const next = state.application.stages[currentIndex + 1];
  if (next) {
    state.application.stages[currentIndex].status = "completed";
    state.application.stages[currentIndex].completedDate = new Date().toISOString();
    state.application.currentStage = next.key;
    next.status = "current";
  }
};