export type WorkCategory = 'ALL' | 'PHOTOGRAPHY' | 'CINEMATOGRAPHY' | 'VIDEOGRAPHY' | '3D PACKAGING' | 'BUSINESS CARDS & BRANDING';

export type PhotoCategory = 'ALL' | 'PORTRAIT' | 'NATURE & WILDLIFE' | 'LIFESTYLE' | 'DOCUMENTARY' | 'MACRO';

export interface WorkProject {
  id: string;
  title: string;
  category: WorkCategory;
  discipline: string;
  description: string;
  imageUrl?: string;
  isTextOnly?: boolean;
  aspectRatio: string;
  colSpanDesktop: number; // e.g. 8, 4, 12
  badge?: string;
  specs?: string;
  client?: string;
  tags: string[];
  synopsis?: string;
  technicalRig?: string;
  colorGradeScience?: string;
}

export interface CommercialProduct {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: string;
  description: string;
  imageUrl: string;
  badge: string;
  subBadge: string;
  specLeft: string;
  specRight: string;
}

export interface BusinessCardItem {
  id: string;
  seriesNumber: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  imageUrl: string;
  format: string;
  finishType: string;
  finishTag: string;
  details?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotoCategory;
  series: string;
  exif: string;
  imageUrl: string;
  aspectRatio: string;
  colSpan: number;
  frameNumber: string;
  badge?: string;
  subtitle?: string;
}

export interface FilmReel {
  id: string;
  title: string;
  role: string;
  category: string;
  description: string;
  imageUrl: string;
  videoPreviewUrl?: string;
  timecode: string;
  format: string;
  aspectRatio: string;
  audioSpec: string;
  scopeSpec: string;
  shutter?: string;
  fps?: string;
  synopsis?: string;
  visualAtmosphere?: string;
  technicalRig?: string;
  colorGradeScience?: string;
  treatmentNotes?: string[];
  tags?: string[];
}

export interface ServicePillar {
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  tags: string[];
  featured?: boolean;
}
