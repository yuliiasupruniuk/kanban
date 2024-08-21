import { CSSProperties, useMemo } from "react";
import { useDraggable } from "@dnd-kit/core";
import styles from "./Task.module.scss";
import ContextMenu from "components/ContextMenu/ContextMenu";
import { Task } from "./types";
import useTaskForm from "components/TaskForm/hook/useTaskForm";
import useDeleteTaskDialog from "components/DeleteTaskDialog/hook/useDeleteTaskDialog";
import { timeAgo } from "utils/time-ago";

const TaskCard = ({ task }: { task: Task }) => {
  const { openDialog: openDeleteDialog } = useDeleteTaskDialog();
  const { openForm: openEditDialog } = useTaskForm();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style: CSSProperties = useMemo(
    () =>
      transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            cursor: "grab",
          }
        : {},
    [transform]
  );

  const contextMenu = [
    {
      label: "Edit",
      action: () => openEditDialog(task),
    },
    {
      label: "Delete",
      action: () => openDeleteDialog(task),
    },
  ];

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${styles.card} ${
        transform ? styles.dragged : ""
      } py-5 px-4 bg-secondary rounded-lg`}
    >
      <div className={`${styles.title} flex justify-between gap-2`}>
        {task.title}
        <ContextMenu id={task.id + "context-menu"} options={contextMenu} />
      </div>
      <p className={styles.description}>{task.description}</p>
      <p className={styles.date}>{task?.createdAt && timeAgo(task.createdAt)}</p>
    </div>
  );
};

export default TaskCard;
