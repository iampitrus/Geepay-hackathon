import { state } from "./Navbar";

function Sidebar({ isOpen, toggleSidebar }: state) {
  function toggleDark(e: any) {
    if (e.target.id === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <aside
      className={
        "transition duration-500 fixed z-10 lg:!flex md:flex hidden h-screen w-screen"
      }
      style={isOpen ? { display: "flex" } : { display: "none" }}
    >
      <div className="flex border-r dark:bg-cyan-950 bg-[#f7f8fa]  py-5 flex-col justify-between items-center px-2 lg:px-5">
        <div>
          <img
            onClick={() => toggleSidebar(!isOpen)}
            width={40}
            src="./logo.svg"
            alt="logo"
            className="mb-5"
          />
          <div className="flex items-center flex-col gap-3">
            <img className="active" width={40} src="./appnav.svg" alt="" />
            <img width={40} src="./profilenav.svg" alt="" />
            <img width={40} src="./boxnav.svg" alt="" />
            <img width={40} src="./setting1nav.svg" alt="" />
            <img width={40} src="./infonav.svg" alt="" />
            <div className="bg-white dark:bg-cyan-900 p-2 rounded-full flex flex-col gap-3">
              <div className="rounded-full p-2 dark:bg-transparent bg-green-700">
                <img
                  id="light"
                  onClick={toggleDark}
                  width={20}
                  src="./light.svg"
                  alt="light"
                />
              </div>
              <div className="rounded-full p-2 bg-transparent dark:bg-green-700">
                <img
                  id="dark"
                  onClick={toggleDark}
                  width={20}
                  src="./darkmode.svg"
                  alt="dark"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img width={40} src="./nextnav.svg" alt="" />
          <img width={30} src="./setting2nav.svg" alt="" />
          <img width={30} src="./logout.svg" alt="" />
        </div>
      </div>
      <div
        onClick={() => toggleSidebar(false)}
        className="w-full dark:bg-cyan-950 block lg:hidden h-full opacity-40 bg-gray-300"
      ></div>
    </aside>
  );
}

export default Sidebar;
