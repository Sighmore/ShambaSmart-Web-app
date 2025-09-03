export interface Diagnosis {
  crop: string;
  issue: string;
  confidence: number; // 0-100
  severity: 'mild' | 'moderate' | 'severe' | string;
  partsAffected?: string;
  recommendations: string[];
  timestamp: string; // ISO
}