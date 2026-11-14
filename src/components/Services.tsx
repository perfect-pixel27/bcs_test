import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Globe, Smartphone, Database, TrendingUp, Video, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Database':
        return <Database className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      case 'Video':
        return <Video className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
      default:
        return <Globe className="w-6 h-6 text-britec-navy group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-britec-slate relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-britec-navy-soft text-britec-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-britec-red" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-britec-navy tracking-tight">
            Everything Your Business Needs to Grow Digitally.
          </h2>
          <div className="w-20 h-1 bg-britec-red mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive digital services from our in-house team. No outsourced handoffs, no template
            shortcuts — engineered for real-world business results.
          </p>
        </div>

        {/* 5 Services Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isWideOnDesktop = index >= 3; // items 4 and 5 on large screens
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-brand-lg transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden ${
                  isWideOnDesktop ? 'lg:col-span-1 xl:col-span-1' : ''
                }`}
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-britec-navy group-hover:to-britec-red transition-all duration-300" />

                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-extrabold text-britec-red px-2.5 py-1 rounded-md bg-britec-red-subtle/80 uppercase tracking-wider">
                      SERVICE {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-britec-navy flex items-center justify-center transition-all duration-300 shadow-2xs">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-britec-navy transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist (Highlights 5 features, then +more tag) */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    {service.features.slice(0, 5).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-britec-red mt-0.5 mr-2 flex-shrink-0" />
                        <span className="font-medium line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-xs text-slate-400 pl-6 italic">
                        + {service.features.length - 5} more integrated capabilities
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-sm font-bold text-britec-navy hover:text-britec-red transition-colors group/btn"
                    aria-label={`Explore ${service.title}`}
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForContact(service.title)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-britec-navy-soft text-slate-700 hover:text-britec-navy transition-colors"
                  >
                    Quick Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={(title) => {
          setSelectedService(null);
          onSelectServiceForContact(title);
        }}
      />
    </section>
  );
};
