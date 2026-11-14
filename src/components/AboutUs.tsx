import React from 'react';
import { Layers, Target, Code, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const pillars = [
    {
      title: 'Complete Digital Solutions',
      description:
        'From high-speed websites and mobile applications to ERP business management, lead generation, and video shoots — everything under one roof.',
      icon: Layers,
    },
    {
      title: 'Business-Focused Technology',
      description:
        'We do not write code for the sake of code. Every tool and system is built specifically to increase sales, streamline workflows, and reduce overhead.',
      icon: Target,
    },
    {
      title: 'Customised Development',
      description:
        'No cookie-cutter templates or forced frameworks. Every digital solution is tailored precisely to your industry, team structure, and operational workflow.',
      icon: Code,
    },
    {
      title: 'End-to-End Digital Support',
      description:
        'Continuous long-term technical care, cloud hosting management, daily page maintenance, and annual maintenance contracts (AMC) you can rely on.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-britec-navy-soft text-britec-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-britec-red" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-britec-navy tracking-tight">
            One Team for Your Entire Digital Journey.
          </h2>
          <div className="w-20 h-1 bg-britec-red mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative and 4 Core Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
                BRITEC Consultancy Services helps shops, manufacturers, institutions and growing brands
                establish, strengthen and expand their digital presence.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We bring website development, mobile applications, business management software and
                digital marketing together through one accountable team. Instead of coordinating between
                separate freelance developers, designers, marketing agencies, and software vendors,
                BRITEC serves as your single comprehensive technology partner.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-britec-navy/30 hover:bg-britec-navy-soft/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-britec-navy group-hover:bg-britec-navy group-hover:text-white flex items-center justify-center mb-3 shadow-2xs transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Infographic of the Unified Digital Journey */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-br from-britec-navy to-britec-navy-dark text-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-britec-red/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-britec-red" />
                    <span className="font-bold text-sm tracking-wide">The BRITEC Unified Advantage</span>
                  </div>
                  <span className="text-xs text-slate-300 font-mono">End-to-End</span>
                </div>

                {/* Architecture Layers */}
                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                      Customer Facing Layer
                    </div>
                    <div className="font-bold text-base text-white">Websites & Mobile Applications</div>
                    <div className="text-xs text-slate-300 mt-1">
                      E-Commerce, Booking Portals, Android & iOS Apps with OTP Login
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2 text-white/40">
                    <span className="text-xs">▼ Direct Integration</span>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/20 ring-2 ring-white/10">
                    <div className="text-xs font-semibold text-red-200 uppercase tracking-wider mb-1">
                      Operational Backbone
                    </div>
                    <div className="font-bold text-base text-white">Integrated Cloud ERP Platform</div>
                    <div className="text-xs text-slate-300 mt-1">
                      GST Billing, Inventory, Purchases, Accounts, Production & Payroll
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center -my-2 text-white/40">
                    <span className="text-xs">▲ Real-Time Analytics</span>
                  </div>

                  {/* Layer 3 */}
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                      Growth & Acquisition
                    </div>
                    <div className="font-bold text-base text-white">Marketing & In-House Ad Production</div>
                    <div className="text-xs text-slate-300 mt-1">
                      Meta & Google Ads, Content Calendars, 4K Shooting, Scripting & Reels
                    </div>
                  </div>
                </div>

                {/* Footer Callout inside box */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Single Point of Accountability</span>
                  </div>
                  <span className="text-white font-semibold">Zero Vendor Sprawl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
