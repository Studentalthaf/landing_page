"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import CurvedLoop from "@/components/CurvedLoop/CurvedLoop";

const testimonials = [
  {
    text: "Pelayanan sangat ramah dan hasil kerjanya memuaskan. Prosesnya juga cepat!",
    imageSrc: avatar1.src,
    name: "Ella",
    username: "@_guruBayaran",
  },
  {
    text: "Sangat membantu bisnis saya berkembang di era digital. Terima kasih tim!",
    imageSrc: avatar2.src,
    name: "Althaf",
    username: "@_alauhar",
  },
  {
    text: "Timnya profesional dan selalu siap membantu kapan saja. Recommended banget!",
    imageSrc: avatar3.src,
    name: "Novin",
    username: "@novinbukannopin",
  },
  {
    text: "Saya suka dengan hasil desainnya, sesuai dengan keinginan saya.",
    imageSrc: avatar4.src,
    name: "Icaa",
    username: "@Chacha20",
  },
  {
    text: "Mantap ini, mantap",
    imageSrc: avatar5.src,
    name: "Mas Kim",
    username: "@taylorkimm",
  },
  {
    text: "Harga terjangkau, kualitas tetap nomor satu. Sukses selalu!",
    imageSrc: avatar6.src,
    name: "Riri",
    username: "@rileysmith1",
  },
  {
    text: "Proses revisi sangat mudah dan cepat. Hasil akhirnya keren banget!",
    imageSrc: avatar7.src,
    name: "Mas Jokowi",
    username: "@jpatelsdesign",
  },
  {
    text: "Sangat puas dengan layanan dan support yang diberikan. Akan order lagi!",
    imageSrc: avatar8.src,
    name: "Kemal",
    username: "@kemalanm",
  },
  {
    text: "Fitur-fiturnya lengkap dan mudah digunakan. Cocok untuk pemula maupun profesional.",
    imageSrc: avatar9.src,
    name: "Casis",
    username: "@casey09",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 text-center mb-0">Apa Kata Mereka?</h2>
          <CurvedLoop className="mb-4 fill-orange-600 " marqueeText="Komentar Mu • Semangat Ku • Komentar Mu • Semangat Ku • " speed={2} curveAmount={150} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[210px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={
                `bg-white rounded-2xl p-6 flex flex-col justify-between shadow-lg h-full border border-slate-100 transition-all duration-300 ` +
                ((i === 1 || i === 5 || i === 7) ? 'row-span-2  ' : '')
              }
            >
              {/* Testimonial text */}
              <p className="text-slate-700 text-base md:text-[1rem] text-left mb-6 flex-1 leading-relaxed">{t.text}</p>
              {/* Name, avatar, username */}
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 text-sm font-bold overflow-hidden">
                  {t.imageSrc ? (
                    <Image
                      src={t.imageSrc}
                      alt={t.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                  ) : (
                    t.name.split(' ').map(n => n[0]).join('').toUpperCase()
                  )}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm leading-tight">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
