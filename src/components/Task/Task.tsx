import { useMemo } from "react";
import { CSS } from "@dnd-kit/utilities";

import styles from "./Task.module.scss";
import ContextMenu from "components/ContextMenu/ContextMenu";
import { Task } from "./types";
import useTaskForm from "components/TaskForm/hook/useTaskForm";
import useDeleteTaskDialog from "components/DeleteTaskDialog/hook/useDeleteTaskDialog";
import { timeAgo } from "utils/time-ago";
import { useSortable } from "@dnd-kit/sortable";

const TaskCard = ({ task }: { task: Task }) => {
  const { openDialog: openDeleteDialog } = useDeleteTaskDialog();
  const { openForm: openEditDialog } = useTaskForm();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });


  const style = useMemo(
    () =>
      transform
        ? {
            transform: CSS.Transform.toString(transform),
            transition,
            cursor: "grab",
            zIndex: 5
          }
        : {},
    [transform, transition]
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
      <div className={`${styles.title} flex justify-between items-center gap-2`}>
        {task.title}
        <ContextMenu id={task.id + "context-menu"} options={contextMenu} />
      </div>
      <p className={styles.description}>{task.description}</p>
      <p className={styles.date}>
        {task?.createdAt && timeAgo(task.createdAt)}
      </p>
    </div>
  );
};

export default TaskCard;
