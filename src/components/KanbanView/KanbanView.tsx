import { useEffect } from "react";
import { DndContext, DragEndEvent, DragOverEvent, KeyboardSensor, PointerSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import useSnackbar from "components/Snackbar/hook/useSnackbar";
import useTasksStore from "hooks/useTasksStore";
import { getTasks, updateTask } from "api";
import { TASK_STATUSES } from "constants/task-statuses";
import Column from "components/Column/Column";
import styles from "./KanbanView.module.scss";
import useRequest from "hooks/useRequest";

const KanbanView = () => {
  const { taskList, setTasksList } = useTasksStore();
  const { openSnackbar } = useSnackbar();
  const { execute: updateActiveTask } = useRequest({
    callback: updateTask
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasksList(tasks);
      } catch (error) {
        openSnackbar((error as Error).message);
      }
    };

    fetchTasks();
  }, [setTasksList, openSnackbar]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const { containerId: overStatus } = over.data?.current?.sortable;
    const { containerId: activeStatus } = active.data?.current?.sortable;

    if (activeStatus !== overStatus) {
      const taskId = active.id;
      const taskIndex = taskList.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        const updatedTasks = [...taskList];
        updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], status: overStatus };
        updateActiveTask(updatedTasks[taskIndex])
        setTasksList(updatedTasks);
      }
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const { containerId: overStatus } = over.data?.current?.sortable;

    const taskIndex = taskList.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1 && taskList[taskIndex].status !== overStatus) {
      const updatedTasks = [...taskList];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], status: overStatus };
      setTasksList(updatedTasks);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className={`${styles.container} p-6 flex gap-6 overflow-x-auto`}>
        {Object.values(TASK_STATUSES).map((status) => {
          const filteredTasks = taskList.filter((task) => task.status === status.value);

          return (
            <SortableContext
              key={status.value}
              id={status.value}
              items={filteredTasks}
              strategy={verticalListSortingStrategy}
            >
              <Column status={status} tasks={filteredTasks} />
            </SortableContext>
          );
        })}
      </div>
    </DndContext>
  );
};

export default KanbanView;
