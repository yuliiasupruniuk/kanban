import { TaskStatus } from "../components/Column/types";

export const TASK_STATUSES= {
    [TaskStatus.ToDo]: {
        title: "Todo",
        color: "#49C4E5"
    },
    [TaskStatus.InProgress]: {
        title: "In Progress",
        color: "#8471F2"
    },
    [TaskStatus.Done]: {
        title: "Done",
        color: "#67E2AE"
    }
}