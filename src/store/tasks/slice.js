import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
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

export const { startLoading, tasksFetched, tasksFetchError } =
  taskSlice.actions;
export default taskSlice.reducer;
