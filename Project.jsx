import React from "react";
import Aos from "aos";
import { useEffect } from "react";

const Project = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section>
        <h1
          data-aos="fade-down"
          className="text-3xl font-bold text-center pt-10"
        >
          Projects
        </h1>
        <div className="container mx-auto mt-14">
          <div className="w-full h-[550px] grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="">
              <div
                data-aos="flip-right"
                className="border border-slate-300 p-5 rounded-lg"
              >
                <h1 className="text-2xl font-bold my-3">Project</h1>
                <img src="src/assets/1.jpg" alt="" />
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita repellendus iusto dolore vitae dolorum.
                </p>
                <a
                  href=""
                  className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-sky-500 hover:text-white hover:scale-50"
                >
                  Read More...
                </a>
              </div>
            </div>
            <div className="">
              <div
                data-aos="flip-right"
                className="border border-slate-300 p-5 rounded-lg"
              >
                <h1 className="text-2xl font-bold my-3">Project</h1>
                <img src="src/assets/1.jpg" alt="" />
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita repellendus iusto dolore vitae dolorum.
                </p>
                <a
                  href=""
                  className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-sky-500 hover:text-white hover:scale-50"
                >
                  Read More...
                </a>
              </div>
            </div>
            <div className="">
              <div
                data-aos="flip-left"
                className="border border-slate-300 p-5 rounded-lg"
              >
                <h1 className="text-2xl font-bold my-3">Project</h1>
                <img src="src/assets/1.jpg" alt="" />
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita repellendus iusto dolore vitae dolorum.
                </p>
                <a
                  href=""
                  className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-sky-500 hover:text-white hover:scale-50"
                >
                  Read More...
                </a>
              </div>
            </div>
            <div className="">
              <div
                data-aos="flip-left"
                className="border border-slate-300 p-5 rounded-lg"
              >
                <h1 className="text-2xl font-bold my-3">Project</h1>
                <img src="src/assets/1.jpg" alt="" />
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  expedita repellendus iusto dolore vitae dolorum.
                </p>
                <a
                  href=""
                  className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-sky-500 hover:text-white hover:scale-50"
                >
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
