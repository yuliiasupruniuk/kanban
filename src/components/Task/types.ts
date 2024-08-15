import { TaskStatus } from "../Column/types";

export type Task = {
  title: string;
  description: string;
  status: TaskStatus;
  created_at: string;
};
