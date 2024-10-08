import styles from "./Column.module.scss";
import { Suspense, lazy } from "react";
import TaskListLoading from "components/Task/TaskLoading";
import { TaskStatusInfo } from "constants/task-statuses";
import { Task } from "components/Task/types";
import { useDroppable } from "@dnd-kit/core";
import useTasksStore from "hooks/useTasksStore";

const TaskCard = lazy(() => import("../Task/Task"));

const Column = ({
  status,
  tasks,
}: {
  status: TaskStatusInfo;
  tasks: Task[];
}) => {
  const { isTaskListLoading } = useTasksStore();
  const { setNodeRef } = useDroppable({
    id: status.value,
  });

  return (
    <div
      ref={setNodeRef}
      id={status.value}
      className={`${styles.column} gap-6`}
    >
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
          {!isTaskListLoading &&
            (tasks.length ? (
              tasks.map((task) => <TaskCard key={task.id} task={task} />)
            ) : (
              <p className="text-center">No tasks yet</p>
            ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Column;
