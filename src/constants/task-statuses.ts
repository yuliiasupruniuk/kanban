import { TaskStatus } from "components/Column/types";

export type TaskStatusInfo = {
  label: string;
  value: string;
  color: string;
};

export const TASK_STATUSES: Record<TaskStatus, TaskStatusInfo> = {
  [TaskStatus.ToDo]: {
    label: "Todo",
    value: "todo",
    color: "#49C4E5",
  },
  [TaskStatus.InProgress]: {
    label: "In Progress",
    value: "inprogress",
    color: "#8471F2",
  },
  [TaskStatus.Done]: {
    label: "Done",
    value: "done",
    color: "#67E2AE",
  },
};
