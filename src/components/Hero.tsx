import React from 'react';
import { ArrowRight, CheckCircle2, Globe, Database, TrendingUp, Video, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const navOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-britec-slate"
    >
      {/* Background Tech Mesh & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-britec-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-britec-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-britec-navy-soft border border-britec-navy/15 text-britec-navy text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-britec-red animate-pulse" />
              <span>CONSULTANCY SERVICES</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-normal">All Under One Roof</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-britec-navy tracking-tight leading-[1.12]">
                Build. Launch.{' '}
                <span className="text-britec-red relative inline-block">
                  Grow.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-britec-red/20"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                Your End-to-End Digital Partner.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From innovative websites and mobile applications to intelligent ERP solutions, digital
              marketing and professional ad shoot production, we bring everything your business needs
              to succeed in the digital world under one roof.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-britec-navy hover:bg-britec-navy-dark rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-200 group active:scale-95"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-britec-navy bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-britec-navy/30 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Core Capability Highlights */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-britec-red flex-shrink-0" />
                  <span>One Accountable Team</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-britec-red flex-shrink-0" />
                  <span>Custom Engineering</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-700 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-britec-red flex-shrink-0" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Tech & Services Showcase Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Container */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6 backdrop-blur-sm">
                {/* Header Bar of the Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-medium text-slate-400 pl-2">
                      britec.digital/suite
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live Operational
                  </span>
                </div>

                {/* Simulated Solutions Grid */}
                <div className="mt-4 space-y-3.5">
                  {/* Website & App Unit */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-britec-navy-soft/60 to-white border border-britec-navy/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-britec-navy text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Websites & Mobile Apps</div>
                        <div className="text-[11px] text-slate-500">Android, iOS, Web & Hosting</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      Fast & Responsive
                    </span>
                  </div>

                  {/* ERP Unit */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Database className="w-4 h-4 text-britec-navy" />
                        <span className="text-xs font-bold text-slate-800">Centralized ERP Portal</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">Billing • Stock • CRM</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-1">
                      <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Sales</div>
                        <div className="text-xs sm:text-sm font-bold text-britec-navy">₹18.4L</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Stock</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">₹26.9L</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-100 shadow-2xs">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">GST Invoices</div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-600">100% Sync</div>
                      </div>
                    </div>
                  </div>

                  {/* Digital Marketing & Ad Shoots */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-britec-red-subtle text-britec-red flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Meta & Google</div>
                        <div className="text-[10px] text-slate-500">Targeted Leads</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Ad Production</div>
                        <div className="text-[10px] text-slate-500">Script to 4K</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro-Badge */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center text-britec-navy font-semibold">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-britec-red" />
                    Complete Digital Transformation
                  </span>
                  <span className="font-medium text-slate-400">Enterprise Ready</span>
                </div>
              </div>

              {/* Trust Badge Below Card - Clean Flow, Zero Overlap */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm py-3 px-4 rounded-xl shadow-md border border-slate-200/90 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">5 Essential Services</div>
                    <div className="text-[11px] text-slate-500">Unified under 1 contract</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  All In-House
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
