import TaskFormStore from "../store/TaskFormStore";

const useTaskForm = () => {
  const task = TaskFormStore((state) => state.task);
  const isOpen = TaskFormStore((state) => state.isOpen);
  const openForm = TaskFormStore((state) => state.openForm);
  const closeForm = TaskFormStore((state) => state.closeForm);

  return {
    task,
    isOpen,
    openForm,
    closeForm,
  };
};

export default useTaskForm;
