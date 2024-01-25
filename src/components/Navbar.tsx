function Navbar() {
  const search = () => {};

  return (
    <nav className="py-4 px-5 w-full border-b items-center justify-between flex">
      <h2 className="text-lg font-bold ml-5">Dashboard</h2>
      <div className="flex h-[48px] gap-6 items-center">
        <form className="h-full w-[394px] relative" onSubmit={search}>
          <img
            className="absolute top-4 left-4"
            src="./Seach.svg"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full border pl-10 rounded-full"
          />
        </form>
        <div className="flex gap-3 px-4 py-2 items-center">
          <img src="./date.svg" alt="date" />
          <p>November 15, 2023</p>
        </div>
        <div className="border items-center flex h-full aspect-square p-4 rounded-full">
          <img src="./notification.svg" alt="notify" />
        </div>
        <div className="flex border h-[48px] justify-center items-center p-1 gap-2 rounded-full">
          <img src="./profile.png" alt="profile" />
          <div className="flex text-base justify-around h-full flex-col">
            <p>Justin Bergson</p>
            <p className="text-sm text-[#787486]">Justin@gmail.com</p>
          </div>
          <img src="./arrowdown.svg" alt="downArrow" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
