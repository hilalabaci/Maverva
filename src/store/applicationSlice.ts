import { createSlice } from "@reduxjs/toolkit";
import { BoardType, ProjectType, SprintType } from "./types";

type ApplicationState = {
  projects: ProjectType[];
  selectedProject?: ProjectType;
  selectedBoard?: BoardType;
  activeSprint?: SprintType;
};
const initialState: ApplicationState = {
  projects: [],
  selectedProject: undefined,
  selectedBoard: undefined,
  activeSprint: undefined,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
});
export default applicationSlice.reducer;
