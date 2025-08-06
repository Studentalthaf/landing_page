import PixelCard from "@/components/PixelCard/PixelCard";

const pricingTiers = [
  {
    title: "Web Development",
    monthlyPrice: "$64 – $226",
    buttonText: "Langsung Cuss",
    popular: true,
    variant: "default" as const,
    features: [
      "bebas minta design",
      "bebas minta revisi",
      "bebas minta fitur",
      "bebas minta bantuan teknis",
      "bebas minta bantuan SEO",
      "bebas minta bantuan marketing digital",
    ],
  },
  {
    title: "Mobile Development",
    monthlyPrice: "$64 – $226",
    buttonText: "Langsung Cuss",
    popular: true,
    variant: "pink" as const,
    features: [
      "bebas minta design",
      "bebas Minta fitur",
      "bebas minta bantuan teknis",
      "Design UI/UX",
      "Bantuan teknis",
    ],
  },
  {
    title: "Other Services",
    monthlyPrice: "$0 – $500",
    buttonText: "Langsung Cuss",
    popular: false,
    variant: "default" as const,
    features: [
      "bebas minta design",
      "bebas minta revisi",
      "bebas minta fitur",
      "bebas minta bantuan teknis",
      "bebas minta bantuan SEO",
      "bebas minta bantuan marketing digital",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white sm:tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Harga Jasa
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Tentukan harga jasa yang sesuai dengan kebutuhanmu. Kami menawarkan
            berbagai layanan mulai dari pengembangan web, aplikasi mobile, hingga
            layanan lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch px-2 sm:px-4">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="relative h-full transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Popular
                  </span>
                </div>
              )}
              <PixelCard
                variant={tier.variant}
                className="w-full h-full max-w-sm mx-auto !border-slate-700 hover:!border-blue-500 transition-colors duration-300 flex flex-col"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-[25px] p-4 md:p-5 flex flex-col h-full min-h-[420px] md:min-h-[480px]">
                  <div className="flex flex-col flex-1">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white text-center mb-3">
                        {tier.title}
                      </h3>
                      <div className="text-center mb-4 md:mb-6">
                        <span className="text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 block">
                          {tier.monthlyPrice}
                        </span>
                        <span className="text-xs md:text-sm text-slate-400 mt-1 block">/project</span>
                      </div>

                      <ul className="space-y-2 md:space-y-3 text-slate-300 pr-1">
                        {tier.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start group"
                          >
                            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 mt-1 flex-shrink-0"></span>
                            <span className="text-xs md:text-sm group-hover:text-white transition-colors duration-200 break-words">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4 flex items-end">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-2 px-3 md:py-2.5 md:px-4 rounded-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-xs md:text-sm min-h-[40px] md:min-h-[48px]">
                        {tier.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </PixelCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
