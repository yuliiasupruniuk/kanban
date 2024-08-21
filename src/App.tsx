import TaskForm from "components/TaskForm/TaskForm";
import Header from "./components/Header/Header";
import KanbanView from "./components/KanbanView/KanbanView";
import PositionedSnackbar from "./components/Snackbar/Snackbar";
import DeleteTaskDialog from "components/DeleteTaskDialog/DeleteTaskDialog";

function App() {
  return (
    <div className="grid grid-rows-[max-content_minmax(0,_1fr)] h-svh w-svw">
      <Header />
      <KanbanView />
      <PositionedSnackbar />
      <TaskForm />
      <DeleteTaskDialog />
    </div>
  );
}

export default App;
