
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Programs",
    links: [
      { name: "Business Management", href: "#programs" },
      { name: "Information Technology", href: "#programs" },
      { name: "Hotel & Catering", href: "#programs" },
      { name: "Accounting (CPA)", href: "#programs" },
    ],
  },
  {
    title: "College",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Why Join Us", href: "#why-us" },
      { name: "Admissions", href: "#contact" },
      { name: "Campus Life", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Ministry Approval", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg", 
    alt: "Jobmark College Logo",
    title: "JOBMARK COLLEGE",
  },
  sections = defaultSections,
  description = "Providing quality, market-relevant training through certificate and diploma programs in Ruiru.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Jobmark College. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-3 lg:justify-start">
              <div className="bg-blue-900 p-2 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-blue-900 uppercase">
                {logo.title}
              </h2>
            </div>
            <p className="max-w-[80%] text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-slate-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-blue-900 transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-slate-900">{section.title}</h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-blue-900 transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-slate-200 py-8 text-xs font-medium text-slate-400 md:flex-row md:items-center md:text-left">
          <div className="order-2 lg:order-1 space-y-1">
            <p>{copyright}</p>
            <p className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
              Designed by <a href="https://novus-studios.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-emerald-500 transition-colors">Novus Studios</a>
            </p>
          </div>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-blue-900 transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
