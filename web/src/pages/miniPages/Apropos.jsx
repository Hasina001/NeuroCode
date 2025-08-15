import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Premier bloc */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center text-white px-4 md:px-6 py-8 space-y-6 md:space-y-0 shadow-lg">

        {/* Mission */}
        <motion.div
          initial={{ x: -200, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className=" p-8 m-4 rounded-lg shadow-lg max-w-3xl bg-gradient-to-r from-[#202B2D] to-[#015967]"
        >
          <h2 className="flex justify-center text-3xl font-bold mb-4">Notre Mission</h2>
          <p>
            Fournir des solutions informatiques complètes et innovantes : 
            création de sites web, administration réseau, intelligence artificielle,
            développement de logiciels sur mesure et conception de systèmes embarqués.
          </p>
        </motion.div>

        {/* Vison */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false }}
          className="p-8 m-4 rounded-lg shadow-lg max-w-3xl bg-gradient-to-r from-[#015967] to-[#202B2D]"
        >
          <h2 className="flex justify-center text-3xl font-bold mb-4">Notre vision</h2>
          <p>
            Devenir un leader en solutions technologiques innovantes, en alliant expertise
            technique et créativité pour accompagner la transformation digitale
            des entreprises partout dans le monde.
          </p>
        </motion.div>

      </section>
      
      {/* Second bloc */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center text-white px-4 md:px-6 py-8 space-y-6 md:space-y-0 shadow-lg">

        {/* Presentation de l'equipe */}
        <motion.div
          initial={{ y:-100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="p-8 m-4 rounded-lg shadow-lg max-w-3xl bg-gradient-to-r from-[#015967] to-[#202B2D]"
        >
          <h2 className="flex justify-center text-3xl font-bold mb-4">Notre equipe</h2>
          <p>
            Nous sommes une équipe dynamique de 6 passionnés de technologie,
            unis par la volonté d’offrir des solutions performantes et adaptées
            aux besoins de nos clients.
          </p>

        </motion.div>

        {/* Pourquoi notre equipe */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay:0.3 }}
          viewport={{ once: false }}
          className="p-8 m-4 rounded-lg shadow-lg max-w-3xl bg-gradient-to-r from-[#202B2D] to-[#015967]"
        >
          <h2 className="flex justify-center text-3xl font-bold mb-4">Pourquoi nous ?</h2>
          <p>
            Nous maîtrisons un large éventail de technologies : Python, JavaScript,
            React.js, Nest.js, Node.js, TailwindCSS, TypeScript, Java, C#, C++ et C.
            Notre expertise nous permet de créer des solutions fiables,
            évolutives et innovantes.
          </p>

        </motion.div> 

      </section>

      {/* boutton  Contact */}
      <div className="mt-6 md:col-spam-2 flex justify-center">
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="px-6 py-3 bg-[#015967] text-white rounded-lg shadow-lg hover:bg-[#14a58] transition"
        >
          <a href="/Contact">Nous contacter</a>
        </motion.button>
      </div>

    </div>
  )
}

export default Apropos