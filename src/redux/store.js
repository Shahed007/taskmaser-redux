import { configureStore } from "@reduxjs/toolkit";
import tasks from "./features/task/taskSlice";

const store = configureStore({
  reducer: {
    tasks,
  },
});

export default store;
