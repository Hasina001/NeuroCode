import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";

const Apropos = () => {
  return (
    <div className="container relative ">
      
        {/* Notre equipe */}
      <div className="flex flex-col p-6 md:p-12 lg:p-15 mb-20 relative">

        {/* Section "Qui Sommes-nous" */}
        <motion.div 
          className="w-[90%] sm:w-4/5 lg:w-auto max-w-lg mx-auto lg:mx-0 lg:ml-auto mb-8 lg:mb-20 pr-0 lg:pr-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center lg:text-right">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium leading-snug tracking-wide">
              <span className="relative inline-block">
                L’essence de notre vision
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-purple-500 transform translate-y-1 scale-x-75 origin-left rounded-full"></span>
              </span>
            </h2>

            <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl font-light tracking-wide">
              Nous sommes une équipe dynamique de 4 passionnés de technologie,
              unis par la volonté d’offrir des solutions performantes et adaptées aux clients.
            </p>
          </div>
        </motion.div>


        {/* Rangée supérieure (image + texte) - inchangée */}
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
  
        {/* Container pour la superposition */}
        <div className="flex justify-start items-center w-full px-4 sm:px-6 lg:px-8 py-8">
  
          {/* Container principal avec position relative pour la superposition */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            
            {/* Image (arrive de la gauche) */}
            <motion.div 
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full rounded-2xl shadow-2xl z-10"
            >
              <img 
                src="/affaires-team-planning-new-strategic-37442970.webp" 
                alt="equipe" 
                className="h-auto w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Texte superposé (arrive de la droite) - positionné plus à droite et plus bas */}
            <motion.div 
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-20 -right-10
                        w-3/5 h-3/5
                        bg-gradient-to-br from-[#6A0DAD] to-[#015967] 
                         shadow-2xl 
                        flex items-center justify-center
                        text-white z-20
                        p-3 sm:p-4 lg:p-6"
            >
              <h1 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 
                            font-bold leading-tight">
                Derrière chaque succès : une équipe dévouée
              </h1>
            </motion.div>
            
          </div>
          
        </div>
        
      </div>

        {/* Notre equipe en detail */}
        <div className="py-24 px-6 md:px-12 lg:px-24">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Bloc 01 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">01</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Sambatra Elia</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">Developpeur IA<br />  </p>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-purple-600 text-4xl mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Rakotoson Aro Ny Aina</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Frontend</p>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-purple-600 text-4xl mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">RAJAONARIVELO Rodin Witman</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-2xl p-6 
              shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-purple-600 text-4xl mb-4">04</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">RAPARISON Ny Hasina</h3>
              <p className="text-gray-800 text-sm font-light leading-relaxed">Developpeur Fullstack</p>
            </motion.div>

          </div>  
          
        </div>

        <div className="mr-auto mb-8 pr-0 lg:pr-4 w-full lg:w-auto max-w-lg"> 
          {/* Titre */} 
          <motion.h1 
          className="text-3xl md:text-4xl font-medium text-left mb-16" 
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.6 }} > 
          
           <span className="relative inline-block"> 
            Ce que nous avons accompli 
             <span 
             className="absolute bottom-0 left-0 h-1 w-full bg-purple-500 transform 
             translate-y-1 scale-x-75 origin-left"></span> 
            </span> 
          </motion.h1> 
        </div>

        {/* Bloc projet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 
        sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 "
        >

          {/* Projet Mobile */}
          <motion.div 
            className="rounded-xl px-6 sm:p-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-all duration-500 hover:duration-800 hover:delay-300
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
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
              Notre équipe met l’accent sur l’expérience utilisateur, 
              la fluidité et l’innovation afin de transformer vos idées en 
              solutions mobiles modernes et efficaces, disponibles aussi bien sur Android que sur iOS.
            </p>

            <button className="mt-16 flex justify-between items-center hover:text-blue-500">Détails <HiArrowLongRight className="ml-2 mt-1"/></button>
          </motion.div>

          {/* Projet Web */}
          <motion.div
            className="rounded-xl px-6 sm:p-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-all duration-500 hover:duration-800 hover:delay-300
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
              e fficaces, sécurisées et évolutives.
            </p>

            <button className="mt-25 flex justify-between items-center hover:text-blue-500">Détails <HiArrowLongRight className="ml-2 mt-1"/></button>

          </motion.div>

        </div>
        
        {/* Les Technologies Utiliser */}
        <div className="mb-4 px-4 sm:px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ x:-100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-16 mb-16 text-center md:text-left"
          >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
              bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-400 to-purple-950">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Next Js</h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Nest Js</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Python</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">PostgreSQL / mySQL</h1>
            </motion.div>

            {/* Bloc 05 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">RestFull API</h1>
            </motion.div>

            {/* Bloc 06 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">GraphQl</h1>
            </motion.div>
          </div>
        </div>

        <div className="mb-4 px-4 sm:px-6 md:px-12 lg:px-20">
          <motion.div 
            initial={{ x:100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 mb-6 text-center md:text-right "
          >
              <h1 className="text-2xl sm:text-3xl 
              md:text-4xl lg:text-5xl font-bold
               bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-950
              to-blue-400"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                React Native
              </h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">Expo</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Android</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-6 sm:p-8 
              shadow-sm hover:shadow-md shadow-blue-300 
              transition-shadow duration-300  bg-gradient-to-tl 
              from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">IOS</h1>
            </motion.div>
          </div>
        </div>
       
      </div>
      {/* Mission */}
      <div className="relative p-4 sm:p-6 lg:p-8">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-950"
        >
          Notre Mission
        </motion.h1>
        
        {/* Container flex pour gérer la mise en page responsive */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
          
          {/* Texte de la mission */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <p className="pt-6 text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-800 
              font-light leading-relaxed tracking-wide text-left mb-8 lg:mb-40"
            >
              Fournir des solutions informatiques complètes et innovantes : <br />création de sites web,
              administration réseau, IA, <br /> logiciels sur mesure et systèmes embarqués.
            </p>
          </motion.div>
          
          {/* Bouton - positionné différemment selon la taille d'écran */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:flex-shrink-0 lg:self-end"
          >
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 
              text-sm sm:text-base lg:text-lg xl:text-xl
              text-white font-bold rounded-xl shadow-xl
              bg-blue-400 hover:bg-blue-900 
              transition-colors duration-300
              lg:mb-40"
            >
              <a href="/Contact" className="block w-full h-full">
                Contactez Nous
              </a>
            </button>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Apropos