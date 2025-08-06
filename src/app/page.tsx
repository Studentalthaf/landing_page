'use client'; // WAJIB: Baris ini menandai komponen sebagai Client Component

import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { RingLoader } from "react-spinners";
import { useState, useEffect } from "react";

export default function Home() {
  // State untuk mengontrol tampilan loader utama
  const [loading, setLoading] = useState(true);
  // State untuk mengontrol efek fade-out pada loader
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Atur timer pertama untuk memulai efek fade-out setelah 1.5 detik
    const fadeOutStartTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Atur timer kedua untuk menyembunyikan loader sepenuhnya setelah transisi fade-out selesai
    const hideLoaderTimer = setTimeout(() => {
      setLoading(false);
    }, 1500 + 500); // 1.5 detik (tampilan awal) + 0.5 detik (durasi fade-out)

    // Fungsi cleanup untuk membersihkan timer saat komponen di-unmount
    return () => {
      clearTimeout(fadeOutStartTimer);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  // Tampilkan loader jika state 'loading' masih true
  if (loading) {
    return (
      <div
        // Menggunakan Tailwind CSS untuk efek transisi opacity
        className={`flex justify-center items-center min-h-screen transition-opacity duration-300 ${
          fadeOut ? 'opacity-20' : 'opacity-100'
        }`}
      >
        <RingLoader color="blue" size={100} />
      </div>
    );
  }
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
