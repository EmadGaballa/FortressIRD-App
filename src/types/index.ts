export interface Project {
  id: string
  title: string
  titleAr: string
  location: string
  locationAr: string
  category: ProjectCategory
  status: ProjectStatus
  coverImage: string
  images: string[]
  summary: string
  summaryAr: string
  description: string
  descriptionAr: string
  highlights?: string[]
  highlightsAr?: string[]
  year?: number
  client?: string
  clientAr?: string
}

export type ProjectCategory = 'residential' | 'commercial' | 'industrial' | 'mixed-use' | 'renovation'
export type ProjectStatus = 'completed' | 'ongoing' | 'planned'

export interface Service {
  id: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  nameAr: string
  role: string
  roleAr: string
  content: string
  contentAr: string
  avatar?: string
}

export interface Stat {
  value: number
  suffix: string
  suffixAr: string
  label: string
  labelAr: string
}

export interface ProcessStep {
  step: number
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  icon: string
}

export interface ContactFormData {
  projectType: string
  location: string
  currentStage: string
  estimatedSize: string
  timeline: string
  services: string[]
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  preferredContact: string
  preferredTime: string
  message: string
  attachments: File[]
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  altAr: string
  category: string
  categoryAr: string
  width: number
  height: number
}

export interface NavLink {
  label: string
  labelAr: string
  href: string
}

export interface FAQ {
  question: string
  questionAr: string
  answer: string
  answerAr: string
}
