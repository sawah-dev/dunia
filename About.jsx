import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
    });
  });
  return (
    <section>
      <div className="container w-full h-[1300px] lg:h-[650px] bg-slate-200">
        <h1
          data-aos="fade-down"
          className="text-3xl font-bold text-center my-10 py-10"
        >
          About
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8">
          <div
            data-aos="fade-right"
            className="text-slate-800 text-center leading-normals"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            error temporibus? Possimus placeat culpa pariatur a voluptatem quod
            beatae aperiam assumenda dolore laudantium, cumque laboriosam qui
            consequatur error debitis commodi? Perspiciatis officia, numquam
            aliquid molestias exercitationem explicabo! Ut facere praesentium
            sapiente repellendus, dignissimos blanditiis beatae obcaecati quam
            harum optio! Ipsam debitis illum atque omnis, culpa nam quod iste
            suscipit soluta delectus nemo eligendi pariatur, tempora ea
            provident amet ab incidunt perspiciatis modi? Cupiditate, mollitia
            veritatis sit cum laboriosam sequi atque impedit pariatur
            reprehenderit repudiandae numquam similique error perspiciatis unde
            consectetur. Expedita accusamus adipisci sequi perspiciatis earum
            ullam magnam quasi id.
          </div>
          <div
            data-aos="fade-left"
            className="text-slate-800 text-center leading-normals"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            error temporibus? Possimus placeat culpa pariatur a voluptatem quod
            beatae aperiam assumenda dolore laudantium, cumque laboriosam qui
            consequatur error debitis commodi? Perspiciatis officia, numquam
            aliquid molestias exercitationem explicabo! Ut facere praesentium
            sapiente repellendus, dignissimos blanditiis beatae obcaecati quam
            harum optio! Ipsam debitis illum atque omnis, culpa nam quod iste
            suscipit soluta delectus nemo eligendi pariatur, tempora ea
            provident amet ab incidunt perspiciatis modi? Cupiditate, mollitia
            veritatis sit cum laboriosam sequi atque impedit pariatur
            reprehenderit repudiandae numquam similique error perspiciatis unde
            consectetur. Expedita accusamus adipisci sequi perspiciatis earum
            ullam magnam quasi id.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
