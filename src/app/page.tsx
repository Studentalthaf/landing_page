'use client'; 

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

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutStartTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);
    const hideLoaderTimer = setTimeout(() => {
      setLoading(false);
    }, 1500 + 500); 

    return () => {
      clearTimeout(fadeOutStartTimer);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
 
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
