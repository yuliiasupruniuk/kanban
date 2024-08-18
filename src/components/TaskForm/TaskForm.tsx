import { MenuItem, Select, TextField } from "@mui/material";
import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import PopupDialog from "../Dialog/Dialog";
import { TaskStatus } from "../Column/types";
import { useForm, Controller } from "react-hook-form";
import { TASK_STATUSES } from "../../constants/task-statuses";
import { TaskFormProps, TaskFormValues } from "./types";
import { Task } from "../Task/types";
import { createTask, updateTask } from "../../api";
import { generateFormSchema } from "./helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import useTasksStore from "../../hooks/useTasksStore";
import { useState } from "react";
import FormField from "../FormField/FormField";

const TaskForm = ({ task, isOpen, onClose }: TaskFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(generateFormSchema()),
    defaultValues: {
      title: task?.title || "",
      description: task?.description,
      status: task?.status || TaskStatus.ToDo,
    },
  });

  const { taskList, setTasksList } = useTasksStore();

  const onSubmit = async (formdata: Omit<Task, "id">) => {
    setIsLoading(true);
    if (task) {
      const data = await updateTask({ ...formdata, id: task.id });
      setIsLoading(false);
      onClose();
    } else {
      const data = await createTask(formdata);
      setTasksList([...taskList, data]);
      console.log("created", data);
      onClose();
      setIsLoading(false);
    }
  };

  return (
    <PopupDialog open={isOpen} onClose={onClose} selectedValue="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <p className="title text-l font-extrabold">
          {task ? "Edit New Task" : "Add Task"}
        </p>

        <FormField name="title" control={control} label="Title" />

        <FormField
          name="description"
          control={control}
          label="Description"
          multiline
          rows={4}
        />

        <FormField
          name="status"
          control={control}
          label="Status"
          select
          options={Object.values(TASK_STATUSES)}
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
                  {status.label}
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
            onClick={onClose}
          />
          <Button
            className="w-full"
            type={ButtonType.Primary}
            label={task ? "Update Task" : "Create Task"}
            isLoading={isSubmitting || isLoading}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </PopupDialog>
  );
};

export default TaskForm;
