import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const LinkMenu = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Project",
      path: "/project",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <nav>
        <div className="container p-4">
          <div className="flex justify-between md:p-6">
            <div className="text-2xl font-semibold items-center lg:text-4xl">
              DE<span className="text-orange-500 font-bold">SIGN</span>
            </div>
            <div className="hidden md:flex justify-between gap-4 items-center">
              {LinkMenu.map((menu) => (
                <div
                  className="p-2 hover:bg-teal-700 text-center hover:text-white rounded-md transition-all cursor-pointer"
                  key={menu.name}
                >
                  <a href={menu.path}>{menu.name}</a>
                </div>
              ))}
            </div>
            <div
              className="text-3xl items-center md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>
        </div>
      </nav>
      {/* responsive menu */}

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className={`absolute top-0 left-0 w-full mt-20 md:hidden ${
              open ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-center bg-orange-500 mx-12 rounded-3xl z-20">
              <ul className="flex justify-center flex-col gap-4 py-4">
                <li className="p-3 hover:bg-teal-700 text-center hover:text-white rounded-md transition-all cursor-pointer">
                  <a href="#">Home</a>
                </li>
                <li className="p-3 hover:bg-teal-700 text-center hover:text-white rounded-md transition-all cursor-pointer">
                  <a href="#">About</a>
                </li>
                <li className="p-3 hover:bg-teal-700 text-center hover:text-white rounded-md transition-all cursor-pointer">
                  <a href="#">Project</a>
                </li>
                <li className="p-3 hover:bg-teal-700 text-center hover:text-white rounded-md transition-all cursor-pointer">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
