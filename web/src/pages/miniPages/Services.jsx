const services = [
  { title: "Développement Web", desc: "Création de sites web modernes et responsives" },
  { title: "Graphisme", desc: "Design graphique et identité visuelle" },
  { title: "Maintenance Réseau", desc: "Support et maintenance pour vos infrastructures" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 text-center">
      <h3 className="text-3xl font-bold mb-10">Nos Services</h3>
      <div className="flex flex-col md:flex-row justify-center  gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;