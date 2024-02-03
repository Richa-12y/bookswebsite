import "./App.css";
import Navbar from "./componet/Navbar";
import Footer from "./componet/Footer";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 mx-auto p-8 w-full justify-center items-center">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
