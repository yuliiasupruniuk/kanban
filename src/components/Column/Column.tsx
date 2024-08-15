import TaskCard from "../Task/Task";
import "./Column.scss";
import { Status } from "../../constants/task-statuses";
import useTasksStore from "../../hooks/useTasksStore";
import { useMemo } from "react";

const Column = ({ status }: { status: Status }) => {
  const { taskList } = useTasksStore();
  const filteredTasks = useMemo(
    () => taskList.filter((task) => task.status === status.value),
    [taskList, status]
  );

  return (
    <div className="column flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="circle" style={{ background: status.color }}></div>
        <p className=" text-xs tracking-[0.15rem] font-bold text-medium-grey uppercase">
          {status.title}
        </p>
      </div>

      <div className="flex flex-col gap-6 overflow-auto scroll-smooth">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
