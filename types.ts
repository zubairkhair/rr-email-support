
// Add React import to resolve the 'React' namespace error
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export type NavSection = 'home' | 'services' | 'about' | 'contact';