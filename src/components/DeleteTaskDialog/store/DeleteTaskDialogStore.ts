import { Task } from "components/Task/types";
import create from "zustand";

type DeleteTaskDialogStateProps = {
  isOpen: boolean;
  task?: Task;
  openDialog: (task: Task) => void;
  closeDialog: () => void;
};

const DeleteTaskDialogStore = create<DeleteTaskDialogStateProps>((set) => ({
  isOpen: false,
  taskId: undefined,
  openDialog: (task: Task) =>
    set({
      isOpen: true,
      task,
    }),
  closeDialog: () =>
    set({
      isOpen: false,
      task: undefined,
    }),
}));

export default DeleteTaskDialogStore;
