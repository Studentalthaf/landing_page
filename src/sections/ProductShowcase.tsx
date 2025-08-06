import Image from "next/image";
import ArrowRight from '@/assets/arrow-right.svg';
import ScrollFloat from '@/components/ScrollFloat/ScrollFloat';
import Cap from "@/assets/captivo.webp";
import StickerPeel from '@/components/StickerPeel/StickerPeel';

export const ProductShowcase = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Website modern, responsif, dan SEO-friendly untuk bisnis Anda",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Aplikasi mobile native dan cross-platform untuk iOS & Android",
      features: ["Native iOS/Android", "Cross Platform", "UI/UX Design", "App Store Ready"]
    },
    {
      icon: "🛒",
      title: "E-Commerce Solutions",
      description: "Platform toko online yang lengkap dan mudah dikelola",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Infrastruktur cloud yang scalable dan aman untuk bisnis Anda",
      features: ["AWS/Azure/GCP", "Database Management", "Security", "24/7 Support"]
    }
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Next.js", logo: "▲" },
    { name: "Node.js", logo: "🟢" },
    { name: "Python", logo: "🐍" },
    { name: "Flutter", logo: "📱" },
    { name: "AWS", logo: "☁️" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-16">
          <ScrollFloat 
            containerClassName="text-center"
            textClassName="font-bold text-gray-900"
          >
            Solusi Digital Terbaik untuk Bisnis Anda
          </ScrollFloat>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami membantu bisnis Anda tumbuh dengan solusi teknologi yang inovatif, 
            modern, dan sesuai dengan kebutuhan pasar saat ini.
          </p>
        </div>

    
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-[#245DFF]/20 flex flex-col h-full">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#245DFF] rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto text-[#245DFF] font-semibold hover:text-[#183EC2] transition-colors duration-200 inline-flex items-center gap-2">
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Teknologi yang Kami Kuasai
            </h3>
            <p className="text-gray-600">
              Menggunakan teknologi terdepan untuk memberikan hasil terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {tech.logo}
                </div>
                <p className="font-semibold text-gray-900">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

   
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Siap Memulai Proyek Anda?
          </h3>
          <p className="text-gray-600 mb-8">
            Konsultasi gratis untuk membahas kebutuhan teknologi bisnis Anda
          </p>
          
     
          <div className="flex justify-center items-center mb-8">
            <StickerPeel
              imageSrc={Cap.src}
              width={200}
              rotate={60}
              peelBackHoverPct={50}
              peelBackActivePct={30}
              shadowIntensity={0.1}
              lightingIntensity={0.36}
              initialPosition="center"
              peelDirection={0}
              className="z-40"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#245DFF] to-[#183EC2] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
              Konsultasi Gratis
            </button>
            <button className="bg-transparent text-gray-700 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-200">
              Lihat Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
