function Sidebar() {
  return (
    <aside className="flex p-5 items-center justify-between flex-col h-full border-r">
      <img width={40} src="./logo.svg" alt="logo" className="mb-5" />
      <div className="flex items-center flex-col gap-3">
        <img width={40} src="./appnav.svg" alt="" />
        <img width={40} src="./profilenav.svg" alt="" />
        <img width={40} src="./boxnav.svg" alt="" />
        <img width={40} src="./setting1nav.svg" alt="" />
        <img width={40} src="./infonav.svg" alt="" />
        <div className="bg-white p-2 rounded-full flex flex-col gap-3">
          <img width={30} src="./lightmode.svg" alt="" />
          <img width={30} src="./darkmode.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-3 items-center">
        <img width={40} src="./nextnav.svg" alt="" />
        <img width={30} src="./setting2nav.svg" alt="" />
        <img width={30} src="./logout.svg" alt="" />
      </div>
    </aside>
  );
}

export default Sidebar;
