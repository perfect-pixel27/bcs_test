import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, Box, Globe, Smartphone, Database, TrendingUp, Video } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-white" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-white" />;
      case 'Database':
        return <Database className="w-6 h-6 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-white" />;
      case 'Video':
        return <Video className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-britec-navy to-britec-navy-dark p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-britec-red text-white uppercase tracking-wider">
              SERVICE {service.number}
            </span>
            <span className="text-xs text-slate-300 font-medium">{service.tagline}</span>
          </div>

          <div className="flex items-center space-x-4 mt-2">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              {getIcon(service.icon)}
            </div>
            <div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-200 mt-1">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-britec-navy mb-2 flex items-center">
              <Layers className="w-4 h-4 mr-2 text-britec-red" />
              Service Overview
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200/60">
              {service.detailedOverview}
            </p>
          </div>

          {/* Complete Brochure Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-britec-navy mb-3 flex items-center">
              <Box className="w-4 h-4 mr-2 text-britec-red" />
              Included Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white p-2.5 rounded-lg border border-slate-100 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Care */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-britec-navy mb-3 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-britec-red" />
              What We Deliver
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-britec-navy mt-2 mr-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustrative Client Application */}
          {service.sampleIllustration && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-britec-navy-soft/60 to-white border border-britec-navy/15">
              <div className="text-xs font-mono font-bold text-britec-navy uppercase">
                Illustration Case Study
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {service.sampleIllustration.title}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {service.sampleIllustration.details}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors order-2 sm:order-1"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-britec-red hover:bg-britec-red-dark rounded-xl shadow-sm hover:shadow-red-sm transition-all group order-1 sm:order-2"
          >
            <span>Enquire About {service.title}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
