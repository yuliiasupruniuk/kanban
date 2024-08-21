import DeleteTaskDialogStore from "../store/DeleteTaskDialogStore";

const useDeleteTaskDialog = () => {
  const task = DeleteTaskDialogStore((state) => state.task);
  const isOpen = DeleteTaskDialogStore((state) => state.isOpen);
  const openDialog = DeleteTaskDialogStore((state) => state.openDialog);
  const closeDialog = DeleteTaskDialogStore((state) => state.closeDialog);

  return {
    task,
    isOpen,
    openDialog,
    closeDialog,
  };
};

export default useDeleteTaskDialog;
