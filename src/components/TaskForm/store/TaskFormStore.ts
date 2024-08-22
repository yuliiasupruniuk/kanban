import { Task } from "components/Task/types";
import create from "zustand";

type TaskFormStateProps = {
  isOpen: boolean;
  task?: Task | null;
  openForm: (task?: Task) => void;
  closeForm: () => void;
};

const TaskFormStore = create<TaskFormStateProps>((set) => ({
  isOpen: false,
  task: undefined,
  openForm: (task?: Task) =>
    set({
      isOpen: true,
      task
    }),
  closeForm: () =>
    set({
      isOpen: false,
      task: null
    }),
}));

export default TaskFormStore;
