import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/captivo.webp';
import Image from "next/image";
import MenuIIcon from '@/assets/menu.svg';


export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 font-poppins">
        <p className="text-white/60 hidden md:block font-medium">
          Mari Buat Website Kamu Lebih Mudah Dan Murah
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="font-semibold"> Ayo Cakk Order aku Butuh Duwek</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-3">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt="Captivooo" width={50} height={50} />
            <MenuIIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 items-center font-poppins">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Tentang Kami</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Fitur</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Pelanggan</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Update</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center justify-center tracking-tight"> Ayo Cobain Gratis</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
