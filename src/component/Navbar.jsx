import closeicon from "../assets/close.png";
import menuicon from "../assets/more.png";

import { useState, useEffect, useRef } from "react";
function Header() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Ref for the sidebar to detect outside clicks
  const sidebarRef = useRef(null);

  // Function to open the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Effect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon") // Ensure menu icon doesn't trigger close
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  return (
    <>
      <header>
        <nav className="flex flex-row md:justify-center sticky z-50  pr-5 items-center py-3 bg-[#403d39] text-white justify-between">
          <h1 className="md:hidden font-bold text-4xl  pl-5">Bmw</h1>
          {/* Menu Icon */}
          <img
            className="md:hidden menu-icon cursor-pointer z-40 "
            src={menuicon}
            alt="Menu"
            onClick={openSidebar}
          />

          {/* Navigation Links */}
          <ul className="md:flex flex-row gap-10 hidden">
            <a className="h-btn px-1 py-2" href="#about">
              <li className="font-bold text-l">About Us</li>
            </a>

            <a className="h-btn px-3 py-2" href="/CarDetails">
              <li className="font-bold text-l">Catalog</li>
            </a>
            <a className="bmw px-3 py-2 home" id="/" href="/">
              <li className="font-extrabold text-xl">Home</li>
            </a>
            <a className="h-btn px-3 py-2" href="#services">
              <li className="font-bold text-l">Service</li>
            </a>

            <a className="h-btn px-3 py-2" href="#contact">
              <li className="font-bold text-l">Contact</li>
            </a>
          </ul>

          {/* Sidebar */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-50">
              {/* Overlay */}
              <div className="fixed inset-0 bg-black opacity-50"></div>

              {/* Sidebar Content */}
              <nav
                ref={sidebarRef}
                className="fixed right-0 top-0 h-full w-72 bg-black text-white p-5 transition-transform transform translate-x-0"
              >
                {/* Sidebar Header with Close Icon on the Right */}
                <div className="flex justify-end">
                  <img
                    className="w-7 cursor-pointer"
                    src={closeicon}
                    alt="Close"
                    onClick={closeSidebar}
                  />
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-5 mt-8">
                  <a className="bmw px-4 py-2 home" id="/" href="/">
                    <li className="font-extrabold text-l">Home</li>
                  </a>
                  <a className="h-btn px-3 py-2" href="#about">
                    <li className="font-bold text-l">About Us</li>
                  </a>

                  <a className="h-btn px-3 py-2" href="/findcar">
                    <li className="font-bold text-l">Catalog</li>
                  </a>

                  <a className="h-btn px-3 py-2" href="#services">
                    <li className="font-bold text-l">Service</li>
                  </a>

                  <a className="h-btn px-3 py-2" href="#contact">
                    <li className="font-bold text-l">Contact</li>
                  </a>
                </ul>
              </nav>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
