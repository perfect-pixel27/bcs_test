import React, { useState } from 'react';
import { processData } from '../data/processData';
import { Search, Compass, Palette, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-5 h-5" />;
      case '02':
        return <Compass className="w-5 h-5" />;
      case '03':
        return <Palette className="w-5 h-5" />;
      case '04':
        return <Rocket className="w-5 h-5" />;
      case '05':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-britec-navy-soft text-britec-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-britec-red" />
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-britec-navy tracking-tight">
            From Idea to Implementation – We Make It Happen.
          </h2>
          <div className="w-20 h-1 bg-britec-red mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A proven, milestone-driven framework that guarantees clarity, transparency, and timely delivery at every phase.
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal) */}
        <div className="hidden lg:block">
          {/* Timeline Nodes & Connecting Bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-britec-navy to-britec-red -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (processData.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 grid grid-cols-5 gap-4">
              {processData.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-britec-red text-white scale-110 ring-4 ring-britec-red-subtle shadow-red-sm'
                          : isPassed
                          ? 'bg-britec-navy text-white'
                          : 'bg-white text-slate-500 border-2 border-slate-300 group-hover:border-britec-navy'
                      }`}
                    >
                      {getStepIcon(step.number)}
                    </div>

                    {/* Step Label */}
                    <div className="mt-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        STEP {step.number}
                      </span>
                      <div
                        className={`text-sm font-bold mt-0.5 transition-colors ${
                          isActive ? 'text-britec-navy' : 'text-slate-700 group-hover:text-britec-navy'
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-sm transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-britec-navy mb-3">
                  <span>PHASE {processData[activeStep].number}</span>
                  <span>•</span>
                  <span className="text-britec-red">{processData[activeStep].subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {processData[activeStep].title} — {processData[activeStep].description}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
              {processData[activeStep].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                  <CheckCircle className="w-5 h-5 text-britec-navy mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE TIMELINE (Vertical) */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-britec-navy via-slate-300 to-britec-red" />

          <div className="space-y-8">
            {processData.map((step) => (
              <div key={step.number} className="relative flex items-start space-x-4 pl-2">
                {/* Node */}
                <div className="relative z-10 w-9 h-9 rounded-xl bg-britec-navy text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 shadow-sm border-2 border-white">
                  {step.number}
                </div>

                {/* Content Box */}
                <div className="flex-1 bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-britec-red uppercase tracking-wider">
                    {step.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{step.description}</p>

                  <div className="mt-3 pt-3 border-t border-slate-200 space-y-1.5">
                    {step.details.slice(0, 3).map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-britec-navy mt-1.5 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
