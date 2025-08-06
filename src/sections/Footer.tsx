export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-950 text-slate-200 pt-12 pb-6 mt-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    
        <div className="md:col-span-2 flex flex-col gap-2">
          <span className="text-2xl font-extrabold tracking-wider text-orange-400">CAPTIVV2</span>
          <span className="text-slate-300 text-sm max-w-xs">Solusi digital kreatif untuk kebutuhan website, aplikasi, dan branding bisnismu.</span>
        </div>
      
        <div>
          <div className="font-semibold text-slate-100 mb-2">Navigasi</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
            <li><a href="#testimoni" className="hover:text-orange-400 transition-colors">Testimoni</a></li>
            <li><a href="#kontak" className="hover:text-orange-400 transition-colors">Kontak</a></li>
          </ul>
        </div>
     
        <div>
          <div className="font-semibold text-slate-100 mb-2">Kontak</div>
          <div className="text-sm text-slate-300 mb-2">Email: <a href="mailto:info@capti.com" className="hover:text-orange-400 transition-colors">info@althafcobacoba.com</a></div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Instagram">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5 1a1 1 0 100 2 1 1 0 000-2z"/></svg>
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Twitter">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 007.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z"/></svg>
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors" aria-label="LinkedIn">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-slate-400 text-center mt-8">&copy; {new Date().getFullYear()} CAPTIVV2 team 2025</div>
    </footer>
  );
};
