import TaskCard from "../Task/Task";
import styles from "./Column.module.scss";
import { Task } from "../Task/types";
import { Status } from "../../constants/task-statuses";

const Column = ({ status, tasks }: { status: Status, tasks: Task[] }) => {
  return (
    <div className={`${styles.column} flex flex-col gap-6`}>
      <div className="flex items-center gap-2">
        <div className={styles.circle} style={{ background: status.color }}></div>
        <p className=" text-xs tracking-[0.15rem] font-bold text-medium-grey uppercase">
          {status.title}
        </p>
      </div>

      <div className="flex flex-col gap-6 overflow-auto scroll-smooth">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
