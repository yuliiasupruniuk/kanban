import { TaskStatus } from "../Column/types";

export type TaskFormProps = {
    mode: "edit" | "add";
  }
  
  export type  TaskFormValues = {
    title: string;
    description: string;
    status: TaskStatus;
  }
  