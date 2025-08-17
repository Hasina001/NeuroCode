import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="container relative                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ">
        {/* Notre equipe */}
      <div className="container flex justify-between items-start p-10 md:p-40 mb-54">

        <motion.div 
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: -250, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-96 ml-40 -mt-20 rounded-2xl shadow-2xl "
        >
        
          <img 
          src="/travail-d-équipe-team-together-collaboration-business-communication-outd-48568990.webp" 
          alt="equipe" 
          className="h-full rounded-2xl object-contain"/>
        
        </motion.div>
        
        <motion.div 
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: -450, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12  ml-8 max-w-md bg-[#015967] rounded-2xl shadow-2xl"
        >
        
          <h1 
          className=" text-center text-3xl md:text-5xl font-bold leading-tight">
            Derrière chaque succès : une équipe dévouée
          </h1>
        
        </motion.div>
      
      </div>
        {/* Mission */}
      <div className="container flex justify-between bg-gradient-to-r 
      from-[#015967]/5   
      relative z-10 p-6 " 
      >

        <motion.div
          initial={{ y:-400, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className=" text-white"
        >
          <h2 
          className="text-center text-3xl font-serif px-8 p-56 border-0 
          rounded-b-full shadow-lg bg-gradient-to-b
          from-[#015967] to-[#202B2D]">
            Du concept à l’innovation
          </h2>

        </motion.div>
        <div className="flex flex-col justify-center items-center p-6">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[#015967] text-center text-3xl font-bold mb-8"
            >
              Nous transformons vos idées en solutions technologiques
            </motion.h2>
            <motion.p 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              Chaque projet commence par une idée. Chez nous, nous combinons créativité et expertise technique pour la transformer en solutions numériques concrètes et performantes. Que ce soit pour un site web, un logiciel sur mesure ou des projets intégrant l’intelligence artificielle, nous veillons à ce que vos idées prennent vie de manière efficace et innovante.
            </motion.p>

        </div>

      </div>
        {/* tech */}
      <div className="container">
        <div className="container p-56">
          <h2>
            Notre technologie
          </h2>
        </div>

        <div className="container p-56">
          presentation
        </div>
      </div>
        {/* vision */}
      <div className="container">
        <div className="container p-56">
          <h2>
            Notre vision
          </h2>
        </div>

        <div className="container p-56">
          qu'est ce qu'on vise  !
        </div>
      </div>
        {/* Pourquoi nous ? */}
      <div className="container">
        <div className="container p-56">
          <h2>
            Pourquoi nous
          </h2>
        </div>

        <div className="container p-56">
          nos qualité !
        </div>
      </div>

        {/* Contact */}

    </div>
  )
}

export default Apropos