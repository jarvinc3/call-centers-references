import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "./MenuIcon";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const section = location.pathname;
    setActiveSection(section);
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const modalOpen = () => {
    setModal(!modal);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/compartir.svg" className="h-8" alt="Flowbite Logo" />
          <span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Call Centers References
          </span>
        </Link>
        <button className="block md:hidden">
          <MenuIcon action={modalOpen} />
        </button>
        <div className={`${modal ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`transition hover:text-neutral800 text-[#7a8697] font-bold cursor-pointer p-3 ${
                  activeSection === item.path
                    ? "bg-[#f5f5fa] rounded-xl text-slate-800"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
