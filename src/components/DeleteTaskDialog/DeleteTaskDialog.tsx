import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import PopupDialog from "../Dialog/Dialog";

const DeleteTaskDialog = () => {
  return (
    <PopupDialog open onClose={() => {}} selectedValue="">
      <div className="flex flex-col gap-6">
        <p className="title text-red text-l font-extrabold">Delete this task?</p>

        <p className="content text-medium-grey text-m font-bold">
          Are you sure you want to delete the ‘Build settings UI’ task and its
          subtasks? This action cannot be reversed.
        </p>

        <div className="flex gap-6">
          <Button
            className="w-full"
            type={ButtonType.Destructive}
            label="Delete"
          />
          <Button
            className="w-full"
            type={ButtonType.Secondary}
            label="Cancel"
          />
        </div>
      </div>
    </PopupDialog>
  );
};

export default DeleteTaskDialog;
