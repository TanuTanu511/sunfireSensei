import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs : [],
    singleJob : null,
  },

   reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },

    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },

  },
});

//Export the actions
export const { setAllJobs, setSingleJob } = jobSlice.actions;

//Export the reducer
export default jobSlice.reducer;