import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-britec-navy via-britec-navy-dark to-britec-navy-deep text-white overflow-hidden">
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-grid-white opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-britec-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-britec-red" />
          <span>Start Your Digital Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Ready to Take Your Business to the Next Level?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Whether you want to establish your online presence, develop a mobile application, streamline
          business operations or strengthen your digital marketing, BRITEC is ready to help.
        </p>

        <div className="pt-2">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-britec-red hover:bg-britec-red-dark rounded-xl shadow-red-lg transition-all duration-200 active:scale-95 group"
          >
            <span>Let's Talk About Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
