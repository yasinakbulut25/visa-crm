import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IUiState {
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
}

const initialState: IUiState = {
  leftSidebarOpen: true,
  rightSidebarOpen: true,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLeftSidebar: (state) => {
      state.leftSidebarOpen = !state.leftSidebarOpen;
    },
    toggleRightSidebar: (state) => {
      state.rightSidebarOpen = !state.rightSidebarOpen;
    },
    setLeftSidebar: (state, action: PayloadAction<boolean>) => {
      state.leftSidebarOpen = action.payload;
    },
    setRightSidebar: (state, action: PayloadAction<boolean>) => {
      state.rightSidebarOpen = action.payload;
    },
  },
});

export const {
  toggleLeftSidebar,
  toggleRightSidebar,
  setLeftSidebar,
  setRightSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
