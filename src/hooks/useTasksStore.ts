import { TaskStore } from "store/TasksStore";

const useTasksStore = () => {
  const taskList = TaskStore((state) => state.taskList);
  const setTasksList = TaskStore((state) => state.setTaskList);
  const isTaskListLoading = TaskStore((state) => state.isTaskListLoading);
  const setIsTaskListLoading = TaskStore((state) => state.setIsTaskListLoading);

  return {
    taskList,
    setTasksList,
    isTaskListLoading,
    setIsTaskListLoading
  };
};

export default useTasksStore;
