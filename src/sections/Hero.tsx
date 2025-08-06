import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cok.webp'
import moonImage from '@/assets/bulan.webp'

import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#245DFF,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="md:flex items-center ">
          <div className="md:w-[478px] ">
            <div className="text-sm inline-flex bg-gradient-to-r from-[#245DFF]/10 to-[#183EC2]/10 border border-[#245DFF]/20 px-4 py-2 rounded-xl tracking-tight mb-6 font-medium text-[#245DFF]"> CAPTIVEAU V2.0
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#E83508] to-yellow-400 text-transparent bg-clip-text mb-6">
              Transform Your Workflow
            </h1>
            <p className="text-lg md:text-xl text-[#010D3E] tracking-tight mb-8">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>
            <div className="flex gap-4 items-center">
              <button className="bg-gradient-to-r from-[#245DFF] to-[#183EC2] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">Pesan Sekarang</button>
              <button className="bg-transparent text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 transition-all duration-200 inline-flex items-center gap-2">
                <span>Dapatkan Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:mt-0 mt-20 md:h-[648px] md:flex-1 relative">
            <Image src={cogImage} 
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
            />
            <Image src={moonImage} 
              alt="Moon"
              width={200}
              height={200}
              className="hidden md:block md:absolute -top-8 -left-32 md:absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
