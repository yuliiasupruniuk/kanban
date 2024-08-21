import { CircularProgress } from "@mui/material";
import { deleteTask } from "api";
import Button from "components/Button/Button";
import { ButtonType } from "components/Button/types";
import PopupDialog from "components/Dialog/Dialog";
import useRequest from "hooks/useRequest";
import useTasksStore from "hooks/useTasksStore";
import useDeleteTaskDialog from "./hook/useDeleteTaskDialog";

const DeleteTaskDialog = () => {
  const { taskList, setTasksList } = useTasksStore();
  const { isOpen, task, closeDialog } = useDeleteTaskDialog();
  const { execute: deleteCurrentTask, isLoading } = useRequest<any>({
    callback: deleteTask,
    handleResponse: () => {
      setTasksList(taskList.filter((t) => t.id !== task?.id));
      closeDialog();
    },
  });

  return (
    <PopupDialog open={isOpen} onClose={closeDialog} selectedValue="">
      <div className="flex flex-col gap-6">
        <p className="title text-red text-l font-extrabold">
          Delete this task?
        </p>

        <p className="content text-medium-grey text-m font-bold">
          Are you sure you want to delete the "{task?.title}" task and its
          subtasks? This action cannot be reversed.
        </p>

        <div className="flex gap-6">
          <Button
            className="w-full"
            type="submit"
            btnStyle={ButtonType.Destructive}
            icon={isLoading && <CircularProgress size={16} />}
            onClick={() => deleteCurrentTask(task?.id)}
            label="Delete"
          />
          <Button
            className="w-full"
            btnStyle={ButtonType.Secondary}
            label="Cancel"
            onClick={closeDialog}
          />
        </div>
      </div>
    </PopupDialog>
  );
};

export default DeleteTaskDialog;
