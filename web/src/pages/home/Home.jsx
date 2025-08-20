import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateHomeElements } from "../../components/animations/HomeAnimations";
import Web from '../../assets/Web.svg';
import Effet from "../../components/background/Effet";

const Home = () => {
  const webImageRef = useRef(null);
  const webImageMobileRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const boutonRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    animateHomeElements({
      image1: webImageRef.current || webImageMobileRef.current,
      h1: h1Ref.current,
      p: pRef.current,
      bouton: boutonRef.current,
      badges: badgesRef.current, 
    });
  }, []);

  return (
    <div className="container relative overflow-hidden">
      {/* Effets de fond avec gradients radials fixes */}
      <div className="absolute inset-0 pointer-events-none">
        <Effet />
      </div>

      {/* Images décoratives - Position desktop uniquement */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-55 right-15 md:right-24 lg:right-20 z-0">
          <img
            ref={webImageRef}
            src={Web}
            alt="Illustration décorative"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-150 lg:h-150 opacity-90"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center py-8 sm:py-12">
        <div className="flex flex-col items-start max-w-4xl ml-8 md:ml-16 lg:ml-24 px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 sm:space-y-8">

          {/* Titre principal */}
          <div className="text-left w-full">
            <h1
              ref={h1Ref}
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              <span className="block mb-2">Construisons ensemble</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600">
                le futur numérique de votre entreprise
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-2xl w-full">
            <p
              ref={pRef}
              className="font-medium text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Imaginez, nous réalisons. Avec nos solutions web, mobiles et digitales sur mesure,
              nous façonnons l'avenir numérique de votre entreprise dès aujourd'hui.
            </p>
          </div>

          {/* Boutons d'action */}
          <div
            ref={boutonRef}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 w-full"
          >
            <button className="group px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-xl bg-gradient-to-r from-violet-800 to-violet-900 hover:from-violet-900 hover:to-violet-950 text-white font-semibold shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Link
                to="/contact"
                className="flex items-center justify-center sm:justify-start gap-2"
              >
                Nous contacter
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </button>

            <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 border-2 border-gray-300 hover:border-violet-400 rounded-xl font-semibold text-gray-700 hover:text-violet-700 bg-white hover:bg-violet-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Link to="/services" className="flex items-center justify-center sm:justify-start">
                En savoir plus
              </Link>
            </button>
          </div>

          {/* Badge ou indicateur de qualité */}
          <div
            ref={badgesRef}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-6 sm:pt-8 w-full"
          >
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">3 ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-violet-50 rounded-full">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <span className="text-sm font-medium text-violet-800">Solutions sur mesure</span>
            </div>
          </div>
        </div>

        {/* Images décoratives pour mobile et tablet - En bas du contenu */}
        <div className="relative w-full flex justify-center mt-8 sm:mt-14 mb-8 px-6 md:hidden">
          {/* Image groupée centrée */}
          <img
            ref={webImageMobileRef}
            src={Web}
            alt="Illustration décorative"
            className="size-100 sm:w-120 sm:h-120 opacity-90"
          />
        </div>



      </div>
    </div>
  );
};

export default Home;