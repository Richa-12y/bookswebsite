import "./App.css";
import Card from "./componet/Card";
import Navbar from "./componet/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 mx-auto p-8 overflow-y-auto bg-teal-100">
        <div className="flex flex-wrap -mx-4 mt-16">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
