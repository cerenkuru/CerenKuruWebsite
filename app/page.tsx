"use client";
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Certificates from '@/app/components/Certificates';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Projects />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}