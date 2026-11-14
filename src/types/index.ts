export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  detailedOverview: string;
  deliverables: string[];
  keyBenefits: string[];
  sampleIllustration?: {
    title: string;
    category: string;
    details: string;
  };
}

export interface ProcessStepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface StrengthItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  serviceInterested: string;
  requirements: string;
}
