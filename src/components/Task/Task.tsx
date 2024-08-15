import { Task } from "./types";
import "./Task.scss";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="card py-5 px-4 bg-secondary rounded-lg">
      <p className="title">Build UI for onboarding flow</p>
      <p className="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        necessitatibus unde similique. Voluptatum, neque nihil?
      </p>
      <p className="date">2011-11-18 14:54:39.929Z</p>
    </div>
  );
};

export default TaskCard;
