import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { TASK_STATUSES } from "../../constants/task-statuses";
import useTasksStore from "../../hooks/useTasksStore";
import Column from "../Column/Column";
import styles from "./KanbanView.module.scss";
import useSnackbar from "components/Snackbar/hook/useSnackbar";
import { useEffect } from "react";
import { getTasks } from "api";


const KanbanView = () => {
  const { taskList, setTasksList, setInitialPointerOffset } = useTasksStore();
  const { openSnackbar } = useSnackbar()

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


  const handleDragStart = (event: any) => {
    const { activatorEvent } = event;

    if (activatorEvent) {
      setInitialPointerOffset({
        x: activatorEvent.clientX,
        y: activatorEvent.clientY,
      });
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const taskId = active.id;
    const newStatus = over.data.current?.status;

    const taskIndex = taskList.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1 && taskList[taskIndex]?.status !== newStatus) {
      const updatedTasks = [...taskList];
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        status: newStatus,
      };
      setTasksList(updatedTasks);
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragMove={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={`${styles.container} p-6 flex gap-6 overflow-x-auto`}>
        {Object.values(TASK_STATUSES).map((status) => {
          const filteredTasks = taskList.filter(
            (task) => task.status === status.value
          );

          return (
            <SortableContext
              key={status.value}
              items={filteredTasks.map((task) => task.id)}
              strategy={rectSortingStrategy}
            >
              
              <Column
                key={"droppable-" + status.value}
                status={status}
                tasks={filteredTasks}
              />
            </SortableContext>
          );
        })}
      </div>
    </DndContext>
  );
};

export default KanbanView;
