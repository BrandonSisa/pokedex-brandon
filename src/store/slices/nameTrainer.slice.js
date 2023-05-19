import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: localStorage.getItem("nameTrainer") ?? "",
  reducers: {
    setNameTrainerGlobal: (stale, action) => {
      localStorage.setItem("nameTrainer", action.payload)
      return action.payload
    },
    lagOut: () => {
      localStorage.removeItem("nameTrainer")
      return ""
    }
  },
});
  
export const { setNameTrainerGlobal, lagOut } = nameTrainerSlice.actions;
export default nameTrainerSlice.reducer