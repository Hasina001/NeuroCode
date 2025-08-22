import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom"

const Apropos = () => {
  return (
    <div className="container overflow-x-hidden">
      
        {/* Notre equipe */}
      <div className="flex flex-col p-4 md:p-8 lg:p-12 mb-20 max-w-full">

        {/* Section "Qui Sommes-nous" */}
        <motion.div 
          className="w-[90%] sm:w-4/5 lg:w-auto max-w-lg mx-auto lg:mx-0 lg:ml-auto mb-8 lg:mb-20 pr-0 lg:pr-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration:0.8, delay: 0.2 }}
        >
          <div className="text-center lg:text-right">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-wide">
              <span className="relative inline-block">
                L'essence de notre vision
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-purple-500 transform translate-y-1 scale-x-75 origin-left rounded-full"></span>
              </span>
            </h2>

            <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl font-light tracking-wide">
              Nous sommes une équipe dynamique de 4 passionnés de technologie,
              unis par la volonté d'offrir des solutions performantes et adaptées aux clients.
            </p>
          </div>
        </motion.div>

        {/* Bannière d'image empilé l'une sur l'autre */}
        <motion.div 
        initial={{ x:100, opacity:0 }}
        whileInView={{ x:0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full max-w-4xl mx-auto h-96 bg-white overflow-hidden mb-24">
          {/* Background business illustration */}
          <div className="absolute inset-0">
            {/* Cette div contiendrait l'illustration de fond de l'image 2 */}
            <div className="w-full h-full bg-gray-100 relative">
              {/* Simulation des éléments d'illustration business */}
              <div className="absolute top-8 left-8 w-16 h-12 border-2 border-gray-400 rounded bg-white"></div>
              <div className="absolute top-12 left-32 w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center">
                <span className="text-green-500 font-bold">$</span>
              </div>
              <div className="absolute top-6 left-48 w-12 h-12 rounded-full border-2 border-gray-400"></div>
              <div className="absolute top-16 left-64 w-6 h-6 border border-blue-500 rounded"></div>
              <div className="absolute top-20 right-32 w-8 h-8 rounded border-2 border-purple-500"></div>
              <div className="absolute top-8 right-16 w-10 h-10 rounded-full border-2 border-pink-500"></div>
              
              {/* World map representation */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <div className="w-64 h-32 relative">
                  <div className="w-full h-full bg-green-300 rounded-lg opacity-60"></div>
                </div>
              </div>
              
              {/* Additional business icons scattered */}
              <div className="absolute bottom-20 left-8 w-8 h-8 border-2 border-blue-600 rounded"></div>
              <div className="absolute bottom-16 left-24 w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="absolute bottom-24 right-24 w-10 h-6 border border-gray-500 rounded"></div>
              <div className="absolute bottom-12 right-8 w-8 h-8 border-2 border-cyan-500 rounded-full"></div>
            </div>
          </div>

          {/* Main purple banner overlay */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl px-8 sm:px-12 py-6 sm:py-10 text-white shadow-2xl max-w-sm">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
                Derrière chaque<br />
                succès : une<br />
                équipe dévouée
              </h1>
            </div>
          </div>
        </motion.div>
        {/* Notre equipe en detail */}
        <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-24 max-w-full">
          <motion.h2 
          initial={{ x:100, opacity:0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
          font-bold text-center mb-8 sm:mb-24 md:mb-40 
          leading-snug tracking-wide px-2
          ">
            <span className="relative inline-block">
              Découvrer nos développeurs
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 
                   h-0.5 sm:h-1 w-3/4 bg-purple-500 
                   transform translate-y-1 sm:translate-y-1.5 
                   scale-x-75 origin-center rounded-full"></span>
            </span>
          </motion.h2>

            {/* Presentation equipe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 w-full mb-24">
            
            {/* Bloc 01 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-4 sm:p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">01</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">Sambatra Elia</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">Developpeur IA</p>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-4 sm:p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-purple-600 text-4xl mb-4">02</div>
              <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-800">Rakotoson Aro Ny Aina</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Frontend</p>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-4 sm:p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-purple-600 text-4xl mb-4">03</div>
              <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-800 break-words">RAJAONARIVELO Rodin Witman</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-4 sm:p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">04</div>
              <h3 className="text-base sm:text-xl font-semibold mb-2 text-gray-800">RAPARISON Ny Hasina</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

          </div>  
          
        </div>

        <div className="mr-auto mb-24 pr-0 lg:pr-4 w-full lg:w-auto max-w-full px-4 sm:px-6 "> 
          {/* Titre */} 
          <motion.h1 
          initial={{ x:100, opacity:0 }}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-wide"> 
          
           <span className="relative inline-block"> 
            Ce que nous avons accompli 
             <span 
             className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-purple-500 transform translate-y-1 scale-x-75 origin-left rounded-full"></span> 
            </span> 
          </motion.h1> 
        </div>

        {/* Bloc projet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 
        sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 lg:px-20 max-w-full"
        >

          {/* Projet Mobile */}
          <motion.div 
            className="rounded-xl px-4 sm:px-6 py-6 sm:py-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-all duration-500 hover:duration-800 hover:delay-300 w-full
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 text-gray-800">
              <span className="relative inline-block">
                Développement Mobile
                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r
                 from-blue-400 to-purple-500  
                  transform translate-y-1 scale-x-75 origin-left"></span>
              </span>
            </h3>
            <p className="pt-4 sm:pt-6 text-base sm:text-lg md:text-xl text-gray-800 
            font-light leading-relaxed text-center md:text-left">
              Nous concevons et réalisons des applications mobiles
              sur mesure, performantes et intuitives, adaptées à vos besoins et à votre audience. 
              Notre équipe met l'accent sur l'expérience utilisateur, 
              la fluidité et l'innovation afin de transformer vos idées en 
              solutions mobiles modernes et efficaces, disponibles aussi bien sur Android que sur iOS.
            </p>

            <button className="mt-8 sm:mt-16 flex justify-between items-center hover:text-blue-500">Détails <HiArrowLongRight className="ml-2 mt-1"/></button>
          </motion.div>

          {/* Projet Web */}
          <motion.div
            className="rounded-xl px-4 sm:px-6 py-6 sm:py-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-all duration-500 hover:duration-800 hover:delay-300 w-full
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 text-gray-800">
              <span className="relative inline-block">
                Développement Web
                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-blue-400  
                  transform translate-y-1 scale-x-75 origin-left"></span>
              </span>
            </h3>
            <p className="pt-4 sm:pt-6 text-base sm:text-lg md:text-xl text-gray-800 
            font-light leading-relaxed text-center md:text-left">
              Nous concevons et développons des sites web modernes, performants et sur mesure, 
              pensés pour renforcer votre présence en ligne. De la vitrine professionnelle aux 
              plateformes e-commerce avancées, nous transformons vos idées en solutions digitales 
              efficaces, sécurisées et évolutives.
            </p>

            <button className="mt-8 sm:mt-16 flex justify-between items-center hover:text-blue-500">Détails <HiArrowLongRight className="ml-2 mt-1"/></button>

          </motion.div>

        </div>
        
        {/* Les Technologies Utiliser */}
        <div className="mb-4 px-4 sm:px-6 md:px-8 lg:px-20 max-w-full">
          <motion.div 
            initial={{ x:-50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-16 mb-16 text-center md:text-left"
          >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
              bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-400 to-purple-950 break-words">
                Développement Web
              </h1>
              
          </motion.div>
          <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-4xl text-base sm:text-lg
                 md:text-xl lg:text-2xl font-light 
                 leading-snug tracking-wide 
                 text-center mb-12"
              >
                Qu'il s'agisse d'un site vitrine ou d'une plateforme plus élaboré, nous concrétisons vos idées en solutions digitales sécurisées et évolutives.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">Next Js</h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">Nest Js</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">Python</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">PostgreSQL / mySQL</h1>
            </motion.div>

            {/* Bloc 05 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">RestFull API</h1>
            </motion.div>

            {/* Bloc 06 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">GraphQl</h1>
            </motion.div>
          </div>
        </div>

        <div className="mb-4 px-4 sm:px-6 md:px-8 lg:px-20 max-w-full">
          <motion.div 
            initial={{ x:50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 mb-6 text-center md:text-right "
          >
              <h1 className="text-2xl sm:text-3xl 
              md:text-4xl lg:text-5xl font-bold
               bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-950
              to-blue-400 break-words"
               >
                Développement Mobile
              </h1>
              
          </motion.div>
          <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-4xl text-base sm:text-lg 
                md:text-xl lg:text-2xl font-light 
                leading-snug tracking-wide 
                text-center mb-12"
              >
                Nous développons des applications mobiles sur mesure, intuitives et performantes, parfaitement adaptées à vos besoins. En privilégiant 
                l'expérience utilisateur et l'innovation, nous créons des solutions fluides et modernes, disponibles sur iOS et Android.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">
                React Native
              </h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">Expo</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">Android</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-4 sm:p-6 md:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">IOS</h1>
            </motion.div>
          </div>
        </div>
       
      </div>
      {/* Mission */}
      <div className="relative p-4 sm:p-6 lg:p-8 max-w-full">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-950 break-words"
        >
          Notre Mission
        </motion.h1>
        
        {/* Container flex pour gérer la mise en page responsive */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 w-full">
          
          {/* Texte de la mission */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 w-full"
          >
            <p className="pt-6 text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 
              font-light leading-relaxed tracking-wide text-left mb-8 lg:mb-40 break-words"
            >
              Fournir des solutions informatiques complètes et innovantes : <br className="hidden sm:block" />création de sites web,
              administration réseau, IA, <br className="hidden sm:block" /> logiciels sur mesure et systèmes embarqués.
            </p>
          </motion.div>
          
          {/* Bouton - positionné différemment selon la taille d'écran */}
           <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <span
              className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4
                text-sm sm:text-base lg:text-lg xl:text-xl
                text-white font-bold rounded-xl shadow-xl
                bg-blue-400 hover:bg-blue-900 
                transition-colors duration-300
                lg:mb-40 flex justify-center"
            >
              <Link to="/Contact" className="block w-full h-full text-center">
                Contactez Nous
              </Link>
            </span>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Apropos