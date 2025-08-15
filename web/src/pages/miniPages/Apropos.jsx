import { motion } from "framer-motion";

const Apropos = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Premier bloc */}
      <section className="min-sm:h-screen flex flex-col justify-center items-center bg-[#202B2D] text-white px-6">

        {/* Mission */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#015967] p-8 m-4 rounded-lg shadow-lg max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
          <p>
            Fournir des solutions informatiques complètes et innovantes : 
            création de sites web, administration réseau, intelligence artificielle,
            développement de logiciels sur mesure et conception de systèmes embarqués.
          </p>
        </motion.div>

        {/* Vison */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Notre vision</h2>
          <p>
            Devenir un leader en solutions technologiques innovantes, en alliant expertise
            technique et créativité pour accompagner la transformation digitale
            des entreprises partout dans le monde.
          </p>
        </motion.div>

      </section>
    </div>
  )
}

export default Apropos