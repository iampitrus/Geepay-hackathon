import { useState } from "react";
import Navbar from "./components/Navbar";
import Revenue from "./components/Revenue";
import Sidebar from "./components/Sidebar";
import TopPlatform from "./components/TopPlatform";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar toggleSidebar={setShowSidebar} isOpen={showSidebar} />
      <div className="lg:ml-[84px]">
        <Navbar isOpen={showSidebar} toggleSidebar={setShowSidebar} />
        <Revenue />
        <TopPlatform />
      </div>
    </>
  );
}

export default App;
