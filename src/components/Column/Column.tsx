import { TASKS } from "../../constants/tasks";
import TaskCard from "../Task/Task";
import "./Column.scss";

const Column = ({ status }: { status: any }) => {
  return (
    <div className="column flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="circle" style={{ background: status.color }}></div>
        <p className=" text-xs tracking-[0.15rem] font-bold text-medium-grey uppercase">
          {status.title}
        </p>
      </div>

      <div className="flex flex-col gap-6 overflow-auto scroll-smooth">
        {TASKS.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
