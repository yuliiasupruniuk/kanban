import { create } from "zustand";
import { Task } from "../components/Task/types";

export const TaskStore = create<{
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
  isTaskListLoading: boolean;
  setIsTaskListLoading: (isTaskListLoading: boolean) => void;
}>((set) => ({
  isTaskListLoading: false,
  setIsTaskListLoading: (isTaskListLoading: boolean) => {
    set((state) => ({
      ...state,
      isTaskListLoading,
    }));
  },
  taskList: [],
  setTaskList: (taskList: Task[]) => {
    set((state) => ({
      ...state,
      taskList,
    }));
  },
}));
