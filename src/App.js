import Navbar from "./components/Navbar";
import "./App.css";
import Graphs from "./components/Graphs";
import Nifty from "./components/Nifty";

function App() {
  return (
    <div>
      <Navbar />
      <Nifty />
      <Graphs />
    </div>
  );
}

export default App;