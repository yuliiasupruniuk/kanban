import { MenuItem, Select, TextField } from "@mui/material";
import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import PopupDialog from "../Dialog/Dialog";
import { TaskStatus } from "../Column/types";
import { useForm, Controller } from "react-hook-form";
import { TASK_STATUSES } from "../../constants/task-statuses";
import { TaskFormProps, TaskFormValues } from "./types";


const TaskForm = ({ mode }: TaskFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({
    defaultValues: {
      title: "",
      description: "",
      status: TaskStatus.Done,
    },
  });

  const onSubmit = (data: TaskFormValues) => {
    reset();
  };

  return (
    <PopupDialog open onClose={() => {}} selectedValue="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <p className="title text-l font-extrabold">
          {mode === "add" ? "Add New Task" : "Edit Task"}
        </p>

        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              className="form-field"
              label="Title"
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="form-field"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
            />
          )}
        />

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              label="Status"
              className="form-field"
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "var(--primary)",
                    "& .MuiMenuItem-root": {
                      padding: 2,
                    },
                  },
                },
              }}
            >
              {Object.values(TASK_STATUSES).map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.title}
                </MenuItem>
              ))}
            </Select>
          )}
        />

        <div className="flex gap-6">
          <Button
            className="w-full"
            type={ButtonType.Secondary}
            label="Cancel"
            onClick={() => reset()}
          />
          <Button
            className="w-full"
            type={ButtonType.Primary}
            label={mode === "add" ? "Create Task" : "Update Task"}
            loading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </PopupDialog>
  );
};

export default TaskForm;
