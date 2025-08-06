import Image from "next/image";
import Hrm from "@/assets/hrm.webp";
import Bca from "@/assets/bca.webp";
import Ciwi from "@/assets/ciwi.webp";
import Fin from "@/assets/fin.webp";
import Bri from "@/assets/bri.webp"

export const LogoTicker = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Gradient overlay untuk efek memudar di kiri dan kanan */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex overflow-hidden relative">
          <div className="flex gap-12 md:gap-20 lg:gap-24 xl:gap-32 items-center animate-scroll" style={{ transform: 'translateZ(0)' }}>
            {/* Set pertama logo */}
            <Image src={Hrm} alt="Hrm Quantum Logo" width={120} height={60} className="h-11 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Bca} alt="Bca Logo" width={120} height={60} className="h-18 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Ciwi} alt="Ciwi Logo" width={120} height={60} className="h-19 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Fin} alt="Finnet Logo" width={120} height={60} className="h-19 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Bri} alt="BRI Logo" width={120} height={60} className="h-10 w-auto object-contain grayscale opacity-70" priority/>
            
            {/* Set kedua logo untuk efek infinite */}
            <Image src={Hrm} alt="Hrm Quantum Logo" width={120} height={60} className="h-11 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Bca} alt="Bca Logo" width={120} height={60} className="h-18 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Ciwi} alt="Ciwi Logo" width={120} height={60} className="h-19 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Fin} alt="Finnet Logo" width={120} height={60} className="h-19 w-auto object-contain grayscale opacity-70" priority/>
            <Image src={Bri} alt="BRI Logo" width={120} height={60} className="h-10 w-auto object-contain grayscale opacity-70" priority/>
          </div>
        </div>
      </div>
    </div>
  );
};
