import Navbar from "./components/Navbar";
import Revenue from "./components/Revenue";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex items-start">
        <Sidebar />
        <div className="w-full flex flex-col">
          <Navbar />
          <Revenue />
        </div>
      </div>
    </>
  );
}

export default App;
