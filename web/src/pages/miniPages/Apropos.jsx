import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";

const Apropos = () => {
  return (
    <div className="container relative ">
      
        {/* Notre equipe */}
      <div className="flex flex-col p-6 md:p-12 lg:p-15 mb-20 relative">

        {/* Section "Qui Sommes-nous" remontée */}
        <motion.div 
          className="ml-auto lg:ml-180 mb-12 lg:mb-20 pr-0 lg:pr-4 w-full lg:w-auto max-w-lg"  // Alignement à droite
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
        <div className="flex flex-row justify-between items-start w-full min-w-[800px] ">
          {/* Image (gauche) */}
          <motion.div 
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: -250, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-96 flex-shrink-0 ml-40 lg:-mt-20 rounded-2xl shadow-2xl z-10"
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
            whileInView={{ x: -580, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 mt-24 md:mt-16 ml-8 md:ml-15 w-96 bg-gradient-to-br from-[#6A0DAD] to-[#015967] rounded-2xl shadow-2xl p-6 text-white z-20"
          >
            <h1 className="text-center text-5xl font-bold leading-tight">
              Derrière chaque succès : une équipe dévouée
            </h1>
          </motion.div>
        </div>

        {/* Notre equipe en detail */}
        <div className="py-25 px-6 md:px-12 lg:px-24">
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
              className="bg-gradient-to-br from-blue-400/20 rounded-xl p-8 
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
              className="bg-gradient-to-br from-blue-400/20 rounded-xl p-8 
              shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-purple-600 text-4xl mb-4">02</div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">Rakotoson Aro Ny Aina</h3>
              <p className="text-gray-800 font-light leading-relaxed">Developpeur Frontend</p>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="bg-gradient-to-br from-blue-400/20 rounded-xl p-8 
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
              className="bg-gradient-to-br from-blue-400/20 rounded-xl p-8 
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

        <div className="mr-auto mb-8 pr-0 lg:pr-4 w-full lg:w-auto max-w-lg">

          {/* Titre */}
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

        {/* Bloc projet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">

          {/* Projet Mobile */}
          <motion.div 
            className="rounded-xl p-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-shadow duration-300
            hover:transition-all hover:duration-800 hover:delay-300
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              <span className="relative inline-block">
                Développement Mobile
                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500  
                  transform translate-y-1 scale-x-75 origin-left"></span>
              </span>
            </h3>
            <p className="pt-6 text-center text-xl text-gray-800 font-light leading-relaxed">
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
            className="rounded-xl p-8 shadow-sm border border-transparent
            hover:shadow-md hover:border-blue-500
            transition-shadow duration-300
            hover:transition-all hover:duration-800 hover:delay-300
            "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-3 text-gray-800">
              <span className="relative inline-block">
                Développement Web
                <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-blue-400  
                  transform translate-y-1 scale-x-75 origin-left"></span>
              </span>
            </h3>
            <p className="text-center text-xl text-gray-800 font-light leading-relaxed pt-6">
              Nous concevons et développons des sites web modernes, performants et sur mesure, 
              pensés pour renforcer votre présence en ligne. De la vitrine professionnelle aux 
              plateformes e-commerce avancées, nous transformons vos idées en solutions digitales 
              e fficaces, sécurisées et évolutives.
            </p>

            <button className="mt-25 flex justify-between items-center hover:text-blue-500">Détails <HiArrowLongRight className="ml-2 mt-1"/></button>

          </motion.div>

        </div>
        
        {/* Les Technologies Utiliser */}
        <div className="mb-20">
          <motion.div 
            initial={{ x:-100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mt-24 "
          >
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-950">Développement Web</h1>
              
          </motion.div>
          <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="m-10 font-light leading-snug tracking-wide text-3xl text-center"
              >
                Qu'il s'agisse d'un site vitrine ou d'une plateforme plus élaboré, nous concrétisons vos idées en solutions digitales sécurisées et évolutives.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-300 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-4xl font-bold">Next Js</h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-400 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-4xl font-bold ">Nest Js</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-500 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-4xl font-bold ">Python</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-300 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-3xl lg:text-4xl font-bold ">PostgreSQL / mySQL</h1>
            </motion.div>

            {/* Bloc 05 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-400 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-4xl font-bold ">RestFull API</h1>
            </motion.div>

            {/* Bloc 06 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-500 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-4xl font-bold ">GraphQl</h1>
            </motion.div>
          </div>
        </div>

        <div className="mb-4">
          <motion.div 
            initial={{ x:100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-right font-bold mt-24 "
          >
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-950 to-blue-400">Développement Mobile</h1>
              
          </motion.div>
          <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="m-10 font-light leading-snug tracking-wide text-3xl text-center"
              >
                Nous développons des applications mobiles sur mesure, intuitives et performantes, parfaitement adaptées à vos besoins. En privilégiant 
                l'expérience utilisateur et l'innovation, nous créons des solutions fluides et modernes, disponibles sur iOS et Android.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
              {/* Bloc 01 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-300 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-center text-4xl font-bold">React Native</h1>
            </motion.div>

            {/* Bloc 02 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-400 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-center text-4xl font-bold ">Expo</h1>
            </motion.div>

            {/* Bloc 03 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-500 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-center text-4xl font-bold ">Android</h1>
            </motion.div>

            {/* Bloc 04 */}
            <motion.div
              className="rounded-xl p-8 
              shadow-sm hover:shadow-md shadow-blue-300 transition-shadow duration-300  bg-gradient-to-tl from-blue-400/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-center text-4xl font-bold ">IOS</h1>
            </motion.div>
          </div>
        </div>
       
      </div>
      {/* Mission */}
      <div className="relative p-4">
        <motion.h1 
        initial={{ scale:0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-5 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-950"
        >
          Notre Mission
        </motion.h1>
        <motion.p 
        initial={{ scale:0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-between pt-6 text-2xl text-gray-800 
        font-light leading-relaxed tracking-wide text-left mb-40"
        >
            Fournir des solutions informatiques complètes <br />et innovantes : création de sites web,
            administration réseau, IA, <br /> logiciels sur mesure et systèmes embarqués. <br />
            <motion.button 
            initial={{ scale:0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="p-6 text-center text-2xl text-white font-bold rounded-xl shadow-xl 
            bg-blue-400 hover:bg-blue-900">
              <a href="/Contact">
              Contactez Nous
              </a>
            </motion.button>
        </motion.p>
        
      </div>
    </div>
  )
}

export default Apropos