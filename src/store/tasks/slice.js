import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  profile: null,
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    profileFetched: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    // profileFetchError: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
    tasksFetched: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    tasksFetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, tasksFetched, tasksFetchError, profileFetched } =
  taskSlice.actions;
export default taskSlice.reducer;
