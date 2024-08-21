import { TaskStatus } from "components/Column/types";

export type TaskFormValues = {
  title: string;
  description: string;
  status: TaskStatus;
};
