import styles from "./Column.module.scss";
import { Task } from "../Task/types";
import { TaskStatusInfo } from "../../constants/task-statuses";
import { Suspense, lazy } from "react";
import TaskListLoading from "components/Task/TaskLoading";

const TaskCard = lazy(() => import("../Task/Task"));

const Column = ({
  status,
  tasks,
}: {
  status: TaskStatusInfo;
  tasks: Task[];
}) => {
  return (
    <div id={status.value} className={`${styles.column} gap-6`}>
      <div className="flex items-center gap-2">
        <div
          className={styles.circle}
          style={{ background: status.color }}
        ></div>
        <p className=" text-xs tracking-[0.15rem] font-bold text-medium-grey uppercase">
          {status.label}
        </p>
      </div>

      <div className="flex flex-col gap-6 overflow-auto scroll-smooth">
        <Suspense fallback={<TaskListLoading />}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Column;
