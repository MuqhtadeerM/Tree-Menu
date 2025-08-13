import "./App.css";
import TreeView from "./Components/Tree";
import menus from "./Components/data";

function App() {
  return (
    <div>
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
