import { create } from "zustand";
import { Task } from "../components/Task/types";

export const TaskStore = create<{
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
}>((set) => ({
  taskList: [],
  setTaskList: (taskList: Task[]) => {
    set(() => ({
      taskList
    }));
  },
}));
