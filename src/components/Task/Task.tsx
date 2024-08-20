import React, { CSSProperties, useMemo } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Task } from "./types";
import styles from "./Task.module.scss";
import ContextMenu from "../ContextMenu/ContextMenu";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog";
import TaskForm from "../TaskForm/TaskForm";

const TaskCard = ({ task }: { task: Task }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
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
      action: () => setIsEditDialogOpen(true),
    },
    {
      label: "Delete",
      action: () => setIsDeleteDialogOpen(true),
    },
  ];

  return (
    <>
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
        <p className={styles.date}>Date</p>
      </div>

      <TaskForm
        task={task}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      />

      <DeleteTaskDialog
        title={task.title}
        id={task.id}
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      />
    </>
  );
};

export default TaskCard;
