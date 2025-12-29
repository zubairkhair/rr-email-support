
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { NavSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavSection>('home');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} onScrollTo={scrollTo} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero onScrollTo={scrollTo} />
        </section>

        <section id="services" className="bg-white">
          <Services />
          <FAQ />
        </section>

        <section id="about" className="bg-slate-50">
          <About />
        </section>

        <section id="contact" className="bg-white">
          <ContactForm />
        </section>
      </main>

      <Footer onScrollTo={scrollTo} />
      <ChatWidget />
    </div>
  );
};

export default App;
