import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'why-us', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* SECTION 1: NAVIGATION BAR */}
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        {/* SECTION 2: HERO / HOMEPAGE BANNER */}
        <Hero />

        {/* SECTION 3: ABOUT US */}
        <AboutUs />

        {/* SECTION 4: OUR SERVICES */}
        <Services onSelectServiceForContact={handleSelectServiceForContact} />

        {/* SECTION 5: HOW WE WORK */}
        <ProcessTimeline />

        {/* SECTION 6: WHY CHOOSE BRITEC? */}
        <WhyChooseUs />

        {/* SECTION 7: CALL TO ACTION */}
        <CtaBanner />

        {/* SECTION 8: GET IN TOUCH */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* SECTION 9: FOOTER */}
      <Footer onSelectServiceForContact={handleSelectServiceForContact} />
    </div>
  );
};

export default App;
