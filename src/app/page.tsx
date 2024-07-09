"use client"
import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Motivations from "@/components/motivations";
import PersonalTastes from "@/components/personalTastes";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PersonalTastes />
      <Motivations />
      <Footer />
    </>
  );
}
