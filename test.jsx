import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateHomeElements } from "../../components/animations/HomeAnimations";
import Doodle from '../../assets/doodle.svg';
import Human from '../../assets/human.svg'


const Home = () => {
  const webImageRef = useRef(null);
  const humanImageRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const boutonRef = useRef(null);

  useEffect(() => {
    animateHomeElements({
      image1: webImageRef.current,
      image2: humanImageRef.current,
      h1: h1Ref.current,
      p: pRef.current,
      bouton: boutonRef.current,
    });
  }, []);

  return (

    <div className="relative container">

      <div className="relative z-10 bg-gray-50/10 rounded-xl p-6 flex flex-col items-center mt-20 sm:mt-24 md:mt-28 lg:mt-30 text-center space-y-5 px-4 sm:px-6 md:px-8">
        <h1
          ref={h1Ref}
          className="opacity-0 font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600"
        >
          Construisons ensemble le futur <br /> numérique de votre <br /> entreprise
        </h1>

        <p ref={pRef} className="opacity-0 font-medium md:text-md text-xl max-w-xs sm:max-w-sm md:max-w-xl">
          Imaginez, nous réalisons. Avec nos solutions web, mobiles et digitales sur mesure, nous façonnons l'avenir numérique de <br /> votre entreprise dès aujourd'hui.
        </p>

        <div
          ref={boutonRef}
          className="opacity-0 flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 justify-center"
        >
          <button className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-violet-800 hover:bg-violet-900 text-white font-medium shadow-lg hover:shadow-blue-700/20 transition-all duration-300 hover:scale-105">
            <Link to="/contact">Nous contacter</Link>
          </button>
          <button className="px-6 py-3 lg:px-7 lg:py-3.5 border rounded-lg font-medium transition-all duration-300 hover:scale-105">
            <Link to="/services">En savoir plus...</Link>
          </button>
        </div>
      </div>

      <div className="absolute top-30 right-20 h-full flex items-center justify-end z-0 pr-2">
        <img
          ref={webImageRef}
          src={Doodle}
          alt="web"
          className="opacity-0 size-64 lg:w-90 lg:h-90"
        />
      </div>

    <div className="absolute top-70 right-40 h-full flex items-center justify-end z-0 pr-2">
        <img
          ref={humanImageRef}
          src={Human}
          alt="web"
          className="opacity-0 size-64 lg:w-90 lg:h-90"
        />
      </div>

    </div>

  );
};

export default Home;