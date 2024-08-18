import { Task } from "./types";
import styles from "./Task.module.scss";
import ContextMenu from "../ContextMenu/ContextMenu";
import DeleteTaskDialog from "../DeleteTaskDialog/DeleteTaskDialog";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

const TaskCard = ({ task }: { task: Task }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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
      <div className={`${styles.card} py-5 px-4 bg-secondary rounded-lg`}>
        <div className={`${styles.title} flex justify-between gap-2`}>
          {task.title}
          <ContextMenu
            id={task.id + "context-menu"}
            options={contextMenu}
          />
        </div>
        <p className={styles.description}>
          {task.description}
        </p>
        <p className={styles.date}>2011-11-18 14:54:39.929Z</p>
      </div>


      <TaskForm task={task} isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)} />

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
