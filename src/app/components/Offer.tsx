
export default function Offer() {
  const brands = [
    {
      name: "Fiskars",
      logo: "/logos/fiskars.png",
      description: "Hrábě, nůžky, nože, sekery rukavice, pily, holandské motyčky",
      category: "Zahradní nářadí"
    },
    {
      name: "Plastia",
      logo: "/logos/plastia.png", 
      description: "Plastové nádoby, malé, velké, střední",
      category: "Květináče a kontejnery"
    },
    {
      name: "Ardon",
      logo: "/logos/ardon.png",
      description: "Kombinované, máčené, zahradní rukavice",
      category: "Osivo a semena"
    },
    {
      name: "Argo",
      logo: "/logos/argo.png",
      description: "Herbicidy, fungicidy, biocidy, repelenty",
      category: "Hnojiva a substráty"
    },
    {
      name: "MoravoSeed",
      logo: "/logos/MoravoSeed.png",
      description: "Paprika roční MOMANTA, Rajče tyčkové DELIKANO",
      category: "České osivo"
    },
    {
      name: "Stocker",
      logo: "/logos/stocker.png",
      description: "Brousky, zahradní hrábě, kultivátory, lopatky",
      category: "Zahradní technika"
    },
    {
      name: "Yankee",
      logo: "/logos/Yankee.png",
      description: "Pink Sands, Lemon Lavender, Fresh Cut Roses, Clean Cotton",
      category: "Inovace a technologie"
    }
  ];

  return (
    <section className="py-24 bg-black" id="offer">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Naše nabídka značek
          </h2>
          <p className="text-xl text-black dark:text-white max-w-3xl mx-auto">
            Spolupracujeme s předními výrobci zahradnických potřeb, abychom vám mohli nabídnout 
            nejkvalitnější produkty pro vaši zahradu
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
                {/* Blurred Background */}
               <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/15 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Logo Container */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-gray-800/90 rounded-2xl p-4 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium rounded-full shadow-lg">
                    {brand.category}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-center leading-relaxed">
                  {brand.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/30 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  