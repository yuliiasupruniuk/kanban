import { TaskStatus } from "../components/Column/types";

export type Status = {
  title: string;
  value: string;
  color: string;
};

export const TASK_STATUSES: Record<TaskStatus, Status> = {
  [TaskStatus.ToDo]: {
    title: "Todo",
    value: "todo",
    color: "#49C4E5",
  },
  [TaskStatus.InProgress]: {
    title: "In Progress",
    value: "inprogress",
    color: "#8471F2",
  },
  [TaskStatus.Done]: {
    title: "Done",
    value: "done",
    color: "#67E2AE",
  },
};
