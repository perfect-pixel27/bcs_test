import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceForContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Get in Touch', href: '#contact' },
  ];

  const serviceCategories = [
    'Website Creation & Hosting',
    'Mobile App Development',
    'ERP Portal & ERP Services',
    'Digital Marketing & Social Media Handling',
    'Ad Shoot Production',
  ];

  const officialEmail = 'britecconsultancyservices@gmail.com';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          {/* Company Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo in white container for maximum brand fidelity */}
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-xs">
              <img
                src="/logo.png"
                alt="BRITEC Consultancy Services"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              BRITEC Consultancy Services
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your End-to-End Digital Partner. From innovative websites and mobile applications to
              intelligent ERP solutions, digital marketing and professional ad shoot production, we
              bring everything your business needs under one roof.
            </p>

            <div className="pt-2">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Open for New Projects & Consultations</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5 group"
                  >
                    <span className="text-britec-red transition-transform group-hover:translate-x-0.5">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Five Services Categories */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceCategories.map((serviceName) => (
                <li key={serviceName}>
                  <button
                    onClick={() => onSelectServiceForContact(serviceName)}
                    className="text-slate-400 hover:text-white transition-colors text-left flex items-start space-x-1.5 group"
                  >
                    <span className="text-britec-red transition-transform group-hover:translate-x-0.5">›</span>
                    <span>{serviceName}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Official Contact Email */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Official Contact Email
              </div>
              <a
                href={`mailto:${officialEmail}`}
                className="text-sm font-semibold text-white hover:text-red-400 flex items-center space-x-2 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-britec-red flex-shrink-0" />
                <span>{officialEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 BRITEC Consultancy Services. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
