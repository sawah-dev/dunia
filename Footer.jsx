import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
    });
  });
  return (
    <section>
      <div className="container mx-auto bg-slate-600 w-full h-[200px] mb-10">
        <h1
          data-aos="fade-down"
          className="text-3xl font-semibold text-center py-5 text-white"
        >
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-8">
          <div>
            <p data-aos="fade-right" className="text-white uppercase">
              address : Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div>
            <p data-aos="fade-left" className="text-white uppercase">
              tlp : 081812218881
            </p>
            <p data-aos="fade-left" className="text-white uppercase">
              email : jajsjj@email.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
