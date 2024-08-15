import { TASK_STATUSES } from "../../constants/task-statuses";
import Column from "../Column/Column";
import "./KanbanView.scss";

const KanbanView = () => {
  return (
    <div className="container p-6 flex gap-6">
      {Object.values(TASK_STATUSES).map((status) => (
        <Column key={status.title} status={status} />
      ))}
    </div>
  );
};

export default KanbanView;
