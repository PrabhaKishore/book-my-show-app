import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTasksFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure } =
  taskSlice.actions;

export default taskSlice.reducer;
