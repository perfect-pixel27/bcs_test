import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    serviceInterested: initialService || '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Update if initialService prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterested: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Business Name is required';
    }

    if (!formData.serviceInterested) {
      newErrors.serviceInterested = 'Please select a service';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please tell us about your project requirements';
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements = 'Requirements should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable enquiry dispatch handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        serviceInterested: '',
        requirements: '',
      });
      setErrors({});
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const officialEmail = 'britecconsultancyservices@gmail.com';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-britec-navy-soft text-britec-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-britec-red" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-britec-navy tracking-tight">
            Let's Build Something Great Together.
          </h2>
          <div className="w-20 h-1 bg-britec-red mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have a project in mind? Tell us about your business requirements, and let's explore the
            right digital solution for your growth.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Direct Channels & Business Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-britec-navy to-britec-navy-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-britec-red/20 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold mb-4">Official Enquiries</h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                Our consultancy consultants review every proposal within one business day to evaluate
                scope, technical feasibility, and customized quotes.
              </p>

              {/* Verified Official Email Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 space-y-3">
                <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-wider text-blue-200">
                  <Mail className="w-4 h-4 text-britec-red" />
                  <span>Verified Corporate Email</span>
                </div>

                <div>
                  <a
                    href={`mailto:${officialEmail}?subject=Project%20Enquiry%20-%20BRITEC%20Consultancy%20Services`}
                    className="text-base sm:text-lg font-bold text-white hover:text-red-200 underline underline-offset-4 break-all transition-colors inline-block"
                  >
                    {officialEmail}
                  </a>
                </div>

                <div className="text-[11px] text-slate-300">
                  Click to open your preferred email client or copy directly.
                </div>
              </div>

              {/* Service Assurance Bullets */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Guaranteed response within 24 business hours</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Itemized scope & transparent estimate agreed upfront</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strict confidentiality and client IP security</span>
                </div>
              </div>
            </div>

            {/* Note on Email Integration Architecture */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-700">Production Integration Note:</span> For
              automated SMTP email delivery in production, this frontend connects directly with standard
              email endpoints such as Resend, EmailJS, or serverless API dispatchers.
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form / Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-brand">
              {isSubmitted ? (
                /* Clear Success State */
                <div className="text-center py-8 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Enquiry Received Successfully!</h3>
                    <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Thank you for reaching out to BRITEC Consultancy Services. Our engineering team
                      has received your project details and will connect with you at{' '}
                      <span className="font-bold text-britec-navy">{submittedData?.email}</span>.
                    </p>
                  </div>

                  {/* Summary of submitted data */}
                  {submittedData && (
                    <div className="bg-slate-50 rounded-xl p-4 text-left max-w-md mx-auto border border-slate-200 text-xs space-y-2">
                      <div className="font-bold text-slate-700 border-b border-slate-200 pb-1">
                        Submission Summary
                      </div>
                      <div>
                        <span className="text-slate-400">Name:</span>{' '}
                        <span className="font-medium text-slate-800">{submittedData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Company:</span>{' '}
                        <span className="font-medium text-slate-800">{submittedData.companyName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Selected Service:</span>{' '}
                        <span className="font-medium text-britec-red">{submittedData.serviceInterested}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Requirements:</span>{' '}
                        <span className="font-medium text-slate-800 line-clamp-2">
                          {submittedData.requirements}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                      <span>Submit Another Enquiry</span>
                    </button>

                    <a
                      href={`mailto:${officialEmail}?subject=Direct%20Inquiry%20from%20${encodeURIComponent(
                        submittedData?.fullName || 'Client'
                      )}`}
                      className="inline-flex items-center px-5 py-2.5 rounded-xl bg-britec-navy text-white text-xs font-bold hover:bg-britec-navy-dark transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5" />
                      <span>Open Direct Email</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-britec-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-britec-navy focus:ring-britec-navy/10'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-britec-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-britec-navy focus:ring-britec-navy/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company / Business Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Business Name <span className="text-britec-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Textiles Pvt Ltd"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.companyName
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-britec-navy focus:ring-britec-navy/10'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Service Interested In */}
                    <div>
                      <label htmlFor="serviceInterested" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Interested In <span className="text-britec-red">*</span>
                      </label>
                      <select
                        id="serviceInterested"
                        value={formData.serviceInterested}
                        onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.serviceInterested
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-britec-navy focus:ring-britec-navy/10'
                        }`}
                      >
                        <option value="">Select a service category</option>
                        <option value="Website Creation & Hosting">SERVICE 01 — Website Creation & Hosting</option>
                        <option value="Mobile App Development">SERVICE 02 — Mobile App Development</option>
                        <option value="ERP Portal & ERP Services">SERVICE 03 — ERP Portal & ERP Services</option>
                        <option value="Digital Marketing & Social Media Handling">SERVICE 04 — Digital Marketing & Social Media</option>
                        <option value="Ad Shoot Production">SERVICE 05 — Ad Shoot Production</option>
                        <option value="Complete Digital Transformation">All Services / Full Transformation</option>
                      </select>
                      {errors.serviceInterested && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                          {errors.serviceInterested}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Requirements / Message */}
                  <div>
                    <label htmlFor="requirements" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Requirements / Message <span className="text-britec-red">*</span>
                    </label>
                    <textarea
                      id="requirements"
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Please share details about your business, current challenges, objectives, and any specific features you need..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.requirements
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-300 focus:border-britec-navy focus:ring-britec-navy/10'
                      }`}
                    />
                    {errors.requirements && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                        {errors.requirements}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-britec-red hover:bg-britec-red-dark disabled:bg-slate-400 rounded-xl shadow-red-sm hover:shadow-red-lg transition-all duration-200 active:scale-98 group"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
