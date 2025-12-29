
import React from 'react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'config',
    title: 'Email Configuration',
    description: 'Help setting up your Roadrunner email on Outlook, Apple Mail, Android, or iPhone. We ensure your SMTP/POP/IMAP settings are perfect.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'password',
    title: 'Password Recovery',
    description: 'Locked out? We assist in recovering forgotten passwords, resetting security questions, and securing your account from unauthorized access.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    )
  },
  {
    id: 'troubleshoot',
    title: 'Troubleshooting',
    description: 'Experiencing errors sending or receiving emails? Our experts diagnose server issues and connection errors to get you back online instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'spam',
    title: 'Spam & Security',
    description: 'Effective solutions for managing junk mail and blocking unwanted senders. We help you set up advanced filters and protect your inbox.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Expert Technical Help</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            RR Email Support Services
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our specialized team handles everything from minor hiccups to critical email failures. Available 24/7 for all USA users.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {servicesData.map((service) => (
              <div key={service.id} className="relative pl-16 group">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors text-white">
                    {service.icon}
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 text-center">
          <a
            href="tel:+17602845760"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-slate-800 transition-all border-b-4 border-blue-600"
          >
            Need Assistance? Call +1 (760)-284-5760 Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
