import { TASK_STATUSES } from "../../constants/task-statuses";
import useTasksStore from "../../hooks/useTasksStore";
import Column from "../Column/Column";
import styles from "./KanbanView.module.scss";

const KanbanView = () => {
  const { taskList } = useTasksStore();

  return (
    <div className={`${styles.container} p-6 flex gap-6`}>
      {Object.values(TASK_STATUSES).map((status) => {
        const filteredTasks = taskList.filter(
          (task) => task.status === status.value
        );
        return (
          <Column key={status.title} status={status} tasks={filteredTasks} />
        );
      })}
    </div>
  );
};

export default KanbanView;
