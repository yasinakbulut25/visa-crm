import { type RootState } from "@/store";

export const selectLeftSidebarOpen = (state: RootState) =>
  state.ui.leftSidebarOpen;

export const selectRightSidebarOpen = (state: RootState) =>
  state.ui.rightSidebarOpen;
