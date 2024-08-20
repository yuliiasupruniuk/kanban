
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useTasksStore from "hooks/useTasksStore";
import { createTask, updateTask } from "api";
import { generateFormSchema } from "./helpers";
import useSnackbar from "components/Snackbar/hook/useSnackbar";
import { TaskStatus } from "components/Column/types";
import FormField from "components/FormField/FormField";
import { TASK_STATUSES } from "constants/task-statuses";
import { TaskFormProps, TaskFormValues } from "./types";
import { Task } from "components/Task/types";
import PopupDialog from "components/Dialog/Dialog";
import Button from "components/Button/Button";
import { ButtonType } from "components/Button/types";

const TaskForm = ({ task, isOpen, onClose }: TaskFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { openSnackbar } = useSnackbar();
  const { handleSubmit, control, formState: { isSubmitting } } = useForm<TaskFormValues>({
    resolver: zodResolver(generateFormSchema()),
    defaultValues: {
      title: task?.title || "",
      description: task?.description,
      status: task?.status || TaskStatus.ToDo,
    },
  });

  const { taskList, setTasksList } = useTasksStore();

  const onSubmit = async (formData: Omit<Task, "id">) => {
    setIsLoading(true);
    try {
      if (task) {
        await updateTask({ ...formData, id: task.id });
      } else {
        const data = await createTask(formData);
        setTasksList([...taskList, data]);
      }
      onClose();
    } catch (error: any) {
      openSnackbar(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PopupDialog open={isOpen} onClose={onClose} selectedValue="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <p className="title text-l font-extrabold">
          {task ? "Edit Task" : "Add Task"}
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
