import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C1618] text-[#EFF7F6] bg-ambient-grid relative selection:bg-[#9A031E]/40 selection:text-[#EFF7F6]">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar for mobile devices */}
      <MobileBottomNav />

    </div>
  );
}
