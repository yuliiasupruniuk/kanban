import { CircularProgress } from "@mui/material";
import { deleteTask } from "../../api";
import useRequest from "../../hooks/useRequest";
import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import PopupDialog from "../Dialog/Dialog";
import useTasksStore from "../../hooks/useTasksStore";

const DeleteTaskDialog = ({
  title,
  id,
  isOpen,
  onClose,
}: {
  title: string;
  id: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { taskList, setTasksList } = useTasksStore();
  const { execute: deleteCurrentTask, isLoading } = useRequest<any>({
    callback: deleteTask,
    handleResponse: () => {
      setTasksList(taskList.filter((task) => task.id !== id));
      onClose();
    },
  });

  return (
    <PopupDialog open={isOpen} onClose={onClose} selectedValue="">
      <div className="flex flex-col gap-6">
        <p className="title text-red text-l font-extrabold">
          Delete this task?
        </p>

        <p className="content text-medium-grey text-m font-bold">
          Are you sure you want to delete the "{title}" task and its subtasks?
          This action cannot be reversed.
        </p>

        <div className="flex gap-6">
          <Button
            className="w-full"
            type={ButtonType.Destructive}
            icon={isLoading && <CircularProgress size={16} />}
            onClick={() => deleteCurrentTask(id)}
            label="Delete"
          />
          <Button
            className="w-full"
            type={ButtonType.Secondary}
            label="Cancel"
            onClick={onClose}
          />
        </div>
      </div>
    </PopupDialog>
  );
};

export default DeleteTaskDialog;
