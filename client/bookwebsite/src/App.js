import "./App.css";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 mx-auto p-8 overflow-y-auto bg-teal-100">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
