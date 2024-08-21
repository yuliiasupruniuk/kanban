import { TaskStatus } from "../Column/types";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt?: number;
};
