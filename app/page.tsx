"use client";
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Certificates from '@/app/components/Certificates';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
// import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#f3efeb] p-4 md:p-8">
      <div
        className="max-w-5xl mx-auto bg-[#f3efeb] rounded-2xl border-2 border-[#c1c2c3] shadow-xl overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #e8e8e8 1px, transparent 1px),
            linear-gradient(0deg, #e8e8e8 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      >
        <div className="relative">
          {/* Sol Margin Çizgisi - Responsive */}
          <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-0 bottom-0 w-0.5 bg-red-300 pointer-events-none z-40"></div>

          {/* Sağ Margin Çizgisi - Responsive */}
          <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-0 bottom-0 w-0.5 bg-red-300 pointer-events-none z-40"></div>

          <div className="relative z-10">
            <Header />
            <div className="divide-y divide-gray-300">
              <Hero />
              <Projects />
              <Certificates />
              <About />
              <Contact />
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}