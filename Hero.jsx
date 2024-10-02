import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="container mt-14 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          {/* hero judul */}
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="text-3xl lg:text-5xl font-semibold leading-loose md:leading-none text-center md:text-left"
            >
              <span className="text-orange-500">Lorem</span> ipsum dolor sit
              amet.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.7 }}
              className="text-slate-700 leading-loose md:leading-normal mt-5 text-center md:text-left"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quod accusantium impedit, blanditiis laborum quas itaque
              voluptatibus consectetur ex quis.
            </motion.p>
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.7 }}
                className="bg-orange-500 text-white hover:bg-orange-200 hover:text-black hover:ring-1 hover:ring-orange-500 px-4 py-2 rounded-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="bg-amber-300 text-gray-900 hover:bg-orange-200 hover:text-black hover:ring-1 hover:ring-orange-500 px-4 py-2 rounded-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
          {/* hero gambar */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.9 }}
          >
            <img src="src/assets/er.jpg" alt="" className="w-[700px]" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
