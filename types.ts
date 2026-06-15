
export enum Tab {
  DASHBOARD = 'DASHBOARD',
  DIRECTORY = 'DIRECTORY',
  PLANNING = 'PLANNING',
  AGRICULTURE = 'AGRICULTURE',
  WATER = 'WATER',
  HEALTH = 'HEALTH',
  MAPS = 'MAPS',
  EDUCATION = 'EDUCATION',
  SCHEMES = 'SCHEMES',
  BILLS = 'BILLS',
  // Admin Tabs
  ADMIN_OVERVIEW = 'ADMIN_OVERVIEW',
  GRIEVANCES = 'GRIEVANCES',
  APPLICATIONS = 'APPLICATIONS',
  CERTIFICATES = 'CERTIFICATES',
  CITIZENS = 'CITIZENS'
}

export type Language = 'en' | 'kn' | 'hi';
export type UserRole = 'citizen' | 'official' | 'village_admin';

export interface User {
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  password?: string;
  villageId?: string;
  panchayatName?: string;
}

export interface Bill {
  id: string;
  citizenEmail: string;
  citizenName: string;
  panchayat: string;
  type: 'Property Tax' | 'Water Tax' | 'Electricity' | 'Maintenance' | 'Other';
  amount: number;
  dueDate: string;
  issuedDate: string;
  status: 'Pending' | 'Paid';
  transactionId?: string;
  paidDate?: string;
  workflowStatus?: 'pending_village_admin' | 'pending_panchayat_admin' | 'approved' | 'rejected';
  forwardedBy?: string;
  forwardedDate?: string;
}

export interface CertificateRequest {
  id: string;
  citizenEmail: string;
  citizenName: string;
  panchayat: string;
  type: string;
  aadhaar: string;
  purpose: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: string;
  certificateId?: string;
  issueDate?: string;
  workflowStatus?: 'pending_village_admin' | 'pending_panchayat_admin' | 'approved' | 'rejected';
  forwardedBy?: string;
  forwardedDate?: string;
}

export interface Grievance {
  id: string;
  subject: string;
  description: string;
  status: 'Pending' | 'Resolved';
  date: string;
  submittedBy: string;
  workflowStatus?: 'pending_village_admin' | 'pending_panchayat_admin' | 'approved' | 'rejected';
  forwardedBy?: string;
  forwardedDate?: string;
}

export interface Application {
  id: string;
  schemeName: string;
  applicantName: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  date: string;
  workflowStatus?: 'pending_village_admin' | 'pending_panchayat_admin' | 'approved' | 'rejected';
  forwardedBy?: string;
  forwardedDate?: string;
  applicantEmail?: string;
  applicantVillage?: string;
}

export interface Village {
  id: string;
  name: string;
  panchayat: string;
  population: number;
  location: string;
  region: string;
  coordinates: { lat: number; lng: number };
  soilType: string;
  waterCapacity: number; // liters
  literacyRate?: number;
  pensionData?: {
    total: number;
    oldAge: number;
    widow: number;
    disability: number;
  };
}

export interface VillageStat {
  label: string;
  value: string | number;
  change: number; // percentage
  trend: 'up' | 'down' | 'neutral';
  color: string;
}

export interface ResourceData {
  time: string;
  usage: number;
  predicted: number;
}

export interface PlanProposal {
  title: string;
  description: string;
  budget: number;
  impact: string;
  imageUrl?: string;
  riskAssessment?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string;
  isThinking?: boolean;
}

// Gemini Types helper
export interface ToolConfig {
  googleSearch?: {};
  googleMaps?: {};
}

export interface MarketData {
  crop: string;
  currentPrice: string;
  forecast: { day: string; price: number }[];
  news: { title: string; url: string }[];
  analysis: string;
}

export interface QuizItem {
  question: string;
  options: string[];
  correctAnswer: number; // index
  explanation: string;
}

export interface Scheme {
  id: string;
  name: string;
  category: 'Agriculture' | 'Housing' | 'Financial' | 'Health' | 'Education' | 'Employment';
  description: string;
  benefits: string;
  eligibility: string;
}