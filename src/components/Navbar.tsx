import { SetStateAction } from "react";

export type state = {
  toggleSidebar: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

function Navbar({ toggleSidebar, isOpen }: state) {
  const search = () => {};

  return (
    <nav className="sticky py-4 md:pr-5 ml-2 md:pl-0 pr-2 w-full border-b items-center justify-between flex">
      <div className="flex items-center">
        <img
          width={40}
          src="./logo.svg"
          alt="logo"
          className="lg:hidden block"
          onClick={() => toggleSidebar(!isOpen)}
        />

        <h2 className="text-lg font-bold ml-5">Dashboard</h2>
      </div>
      <div className="flex h-[48px] gap-6 items-center">
        <form
          className="h-full md:w-[394px] relative sm:block hidden"
          onSubmit={search}
        >
          <img
            className="absolute top-4 left-4"
            src="./Seach.svg"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full border dark:bg-cyan-900 pl-10 rounded-full"
          />
        </form>
        <div className="hidden dark:text-cyan-600 lg:flex gap-3 px-4 py-2 items-center">
          <img src="./date.svg" alt="date" />
          <p>November 15, 2023</p>
        </div>
        <div className="border items-center flex h-full aspect-square p-4 rounded-full">
          <img src="./notification.svg" alt="notify" />
        </div>
        <div className="flex border h-[48px] justify-center items-center p-1 gap-2 rounded-full">
          <img src="./profile.png" alt="profile" />
          <div className="md:flex hidden text-base justify-around h-full flex-col">
            <p>Justin Bergson</p>
            <p className="text-sm text-[#787486]">Justin@gmail.com</p>
          </div>
          <img
            className="hidden md:block"
            src="./arrowdown.svg"
            alt="downArrow"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
