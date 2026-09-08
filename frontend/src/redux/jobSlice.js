import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs : [],
  },

   reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    }
  },
});

//Export the actions
export const { setAllJobs } = jobSlice.actions;

//Export the reducer
export default jobSlice.reducer;