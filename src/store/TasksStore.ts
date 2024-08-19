import { create } from "zustand";
import { Task } from "../components/Task/types";

export const TaskStore = create<{
  initialPointerOffset: {x: number, y:number}
  setInitialPointerOffset: (value: {x: number, y:number}) => void
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
}>((set) => ({
  taskList: [],
  setTaskList: (taskList: Task[]) => {
    set((state) => ({
      ...state,
      taskList,
    }));
  },

  initialPointerOffset: {x: 0, y: 0},
  setInitialPointerOffset: (initialPointerOffset: {x: number, y:number}) => {
    set((state) => ({
      ...state,
      initialPointerOffset
    }));
  },
}));
