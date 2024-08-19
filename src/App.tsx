import { useEffect } from "react";
import Header from "./components/Header/Header";
import KanbanView from "./components/KanbanView/KanbanView";
import { getTasks } from "./api";
import useTasksStore from "./hooks/useTasksStore";


function App() {
  const { setTasksList } = useTasksStore();

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks()
      setTasksList(tasks)
    }

    fetchTasks()
  }, []);

  return (
    <div className="grid grid-rows-[max-content_minmax(0,_1fr)] h-svh w-svw">
      <Header />
      <KanbanView />
    </div>
  );
}

export default App;
