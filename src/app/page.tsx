"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyNetradyne from "@/components/sections/WhyNetradyne";
import CustomerTestimonials from "@/components/sections/CustomerTestimonials";
import Partners from "@/components/sections/Partners";
import GlobalMarket from "@/components/sections/GlobalMarket";
import Awards from "@/components/sections/Awards";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyNetradyne />
      <CustomerTestimonials />
      <Partners />
      <GlobalMarket />
      <Awards />
      <Blog />
      <Footer />
    </>
  );
}
