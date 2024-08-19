import { TaskStore } from "../store/TasksStore";

const useTasksStore = () => {
  const taskList = TaskStore((state) => state.taskList);
  const setTasksList = TaskStore((state) => state.setTaskList);
  const initialPointerOffset = TaskStore((state) => state.initialPointerOffset);
  const setInitialPointerOffset = TaskStore(
    (state) => state.setInitialPointerOffset
  );

  return {
	initialPointerOffset,
	setInitialPointerOffset,
    taskList,
    setTasksList,
  };
};

export default useTasksStore;
