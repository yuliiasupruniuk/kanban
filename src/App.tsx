import Header from "./components/Header/Header";
import KanbanView from "./components/KanbanView/KanbanView";
import PositionedSnackbar from "./components/Snackbar/Snackbar";

function App() {
  return (
    <div className="grid grid-rows-[max-content_minmax(0,_1fr)] h-svh w-svw">
      <Header />
      <KanbanView />
      <PositionedSnackbar />
    </div>
  );
}

export default App;
