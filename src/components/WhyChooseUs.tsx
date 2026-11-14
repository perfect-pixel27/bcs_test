import React from 'react';
import { strengthsData } from '../data/strengthsData';
import { UserCheck, Cpu, ShieldCheck, Layers, Headphones, Target } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Target':
        return <Target className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-britec-navy-soft text-britec-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-britec-red" />
            <span>Why Choose Us?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-britec-navy tracking-tight">
            Your Vision. Our Technology. Shared Success.
          </h2>
          <div className="w-20 h-1 bg-britec-red mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We partner with businesses to eliminate technical roadblocks and create reliable, scalable
            digital foundations.
          </p>
        </div>

        {/* 6 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {strengthsData.map((strength) => (
            <div
              key={strength.id}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-brand-lg hover:border-britec-navy/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-britec-navy flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    {getIcon(strength.icon)}
                  </div>
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-britec-navy-soft group-hover:text-britec-navy transition-colors">
                    {strength.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-britec-navy transition-colors mb-3">
                  {strength.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-britec-red">
                <span>Committed to Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
