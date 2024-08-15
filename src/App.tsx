import Header from "./components/Header/Header";
import KanbanView from "./components/KanbanView/KanbanView";

function App() {
  return (
    <div className="h-full grid grid-rows-[max-content_minmax(0,_1fr)]">
      <Header />
      <KanbanView />
    </div>
  );
}

export default App;
