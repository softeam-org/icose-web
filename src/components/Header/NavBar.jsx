import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { pages } from "data/pages";
import Overlay from "@/components/Overlay";
import PageLink from "./PageLink";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = pages.map(page => {
    return (
      <PageLink 
        key={page.name}
        name={page.name}
        route={page.route}
        onClick={() => setIsNavOpen(false)}
      />
    );
  });

  return (
    <>
      <List 
        onClick={() => setIsNavOpen(true)}
        className="block xl:hidden text-white cursor-pointer"
        size={48}
        weight="bold"
      />
      <nav className={(isNavOpen ? "left-0 " : "-left-80 ") + "w-80 text-standard-blue bg-white fixed inset-y-0 xl:my-auto xl:text-white xl:p-0 xl:w-auto xl:bg-inherit xl:static xl:block select-none z-20 transition-[left] duration-300 ease-in-out"}>
        <div className="overflow-y-auto h-full p-8 xl:p-0">
          <X 
            onClick={() => setIsNavOpen(false)}
            className="block xl:hidden mb-4 ml-auto cursor-pointer z-30"
            size={32}
            weight="bold"
          />
          <ul className="flex flex-col items-start font-black gap-10 xl:flex-row text-xl">
            {links}
          </ul>
        </div>
      </nav>
      <Overlay
        onClick={() => setIsNavOpen(false)}
        isActive={isNavOpen}
      />
    </>
  );
}

export default NavBar;

