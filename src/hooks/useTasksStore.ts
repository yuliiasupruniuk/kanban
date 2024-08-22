import { TaskStore } from "store/TasksStore";

const useTasksStore = () => {
  const taskList = TaskStore((state) => state.taskList);
  const setTasksList = TaskStore((state) => state.setTaskList);

  return {
    taskList,
    setTasksList,
  };
};

export default useTasksStore;
