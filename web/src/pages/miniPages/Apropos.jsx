import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="container relative -mt-0 md:-mt-1">
      
        {/* Notre equipe */}
      <div className="flex flex-col p-6 md:p-12 lg:p-40 mb-20 lg:mb-54 relative font-sans">

        {/* Section "Qui Sommes-nous" remontée */}
        <motion.div 
          className="ml-auto mb-12 lg:mb-20 pr-0 lg:pr-4 w-full lg:w-auto max-w-lg"  // Alignement à droite
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-right">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-wide">
              <span
                className="relative inline-block"
              >
                L’essence de notre vision
                <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-500 
                transform translate-y-1 scale-x-75 origin-left"></span>
              </span>
            </h2>

            <p className="mt-4 text-gray-700 text-lg md:text-xl font-light tracking-wider">
              Nous sommes une équipe dynamique de 4 passionnés de technologie,
              unis par la volonté d’offrir des solutions performantes et adaptées aux clients.

            </p>
          </div>

        </motion.div>

        {/* Rangée supérieure (image + texte) - inchangée */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          {/* Image (gauche) */}
          <motion.div 
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: -250, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-96 mx-auto lg:ml-40 lg:-mt-20 rounded-2xl shadow-2xl z-10"
          >
            <img 
              src="/affaires-team-planning-new-strategic-37442970.webp" 
              alt="equipe" 
              className="h-auto w-full rounded-2xl object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Texte (droite) */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: -450, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 lg:mt-12 ml-0 lg:ml-8 w-full lg:max-w-md bg-gradient-to-br from-[#6A0DAD] to-[#015967] rounded-2xl shadow-2xl p-6 text-white z-20"
          >
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Derrière chaque succès : une équipe dévouée
            </h1>
          </motion.div>
        </div>

        {/* Notre equipe en detail */}
        <div className="py-50 px-6 md:px-12 lg:px-24">
          <motion.h1 
            className="text-3xl md:text-4xl font-medium text-center mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              Découvrer nos développeurs
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-500 
                transform translate-y-1 scale-x-75 origin-left"></span>
            </span>
          </motion.h1>

            {/* Presentation equipe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Bloc 01 */}
            <motion.div
              className="bg-gradient-to-br from-[#202B2D]/20 to-[#015967]/40 rounded-xl p-8 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">01</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Sambatra Elia</h3>
              <p className="text-gray-800 font-light leading-relaxed">Developpeur IA<br />  </p>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="bg-gradient-to-br from-[#202B2D]/20 to-[#015967]/40 rounded-xl p-8 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-purple-600 text-4xl mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Mr Aro</h3>
              <p className="text-gray-800 font-light leading-relaxed">Developpeur Frontend</p>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="bg-gradient-to-br from-[#202B2D]/20 to-[#015967]/40 rounded-xl p-8 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-purple-600 text-4xl mb-4">03</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">RAJAONARIVELO Rodin Witman</h3>
              <p className="text-gray-800 font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="bg-gradient-to-br from-[#202B2D]/20 to-[#015967]/40 rounded-xl p-8 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">04</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">RAPARISON Ny Hasina</h3>
              <p className="text-gray-800 font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

          </div>  
          
        </div>

        <div className="mr-auto mb-12 lg:mb-20 pr-0 lg:pr-4 w-full lg:w-auto max-w-lg">
          <motion.h1 
            className="text-3xl md:text-4xl font-medium text-left mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative inline-block">
              Ce que nous avons accompli
              <span className="absolute bottom-0 left-0 h-1 w-full bg-purple-500 
                transform translate-y-1 scale-x-75 origin-left"></span>
            </span>
          </motion.h1>
      </div>
        
      </div>
      
        {/* Mission */}
      <div>

      </div>
        {/* Contact */}

    </div>
  )
}

export default Apropos