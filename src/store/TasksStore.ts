import { create } from "zustand";
import { Task } from "../components/Task/types";
import { TASKS } from "../constants/tasks";

export const TaskStore = create<{
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
}>((set) => ({
  taskList: TASKS,
  setTaskList: (taskList: Task[]) => {
    set(() => ({
      taskList,
    }));
  },
}));
