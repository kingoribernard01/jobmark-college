
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Monitor, 
  ChefHat, 
  Calculator, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight, 
  Menu,
  X,
  Award,
  Users2, 
  ShieldCheck, 
  Star, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  TrendingUp, 
  ExternalLink, 
  Play, 
  Calendar, 
  HelpCircle, 
  Clock, 
  ArrowUpRight, 
  MessageSquare, 
  Zap, 
  FileText, 
  UserCheck, 
  Sparkles, 
  ClipboardCheck,
  Lightbulb,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import { Footer7 } from './components/ui/footer-7';
import { Testimonial } from './components/ui/testimonial-card';
import { Header } from './components/ui/header-1';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

const App: React.FC = () => {
  const [enrollFormStatus, setEnrollFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollFormStatus('sending');
    setTimeout(() => {
      setEnrollFormStatus('success');
      setTimeout(() => setEnrollFormStatus('idle'), 5000);
    }, 1800);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormStatus('sending');
    setTimeout(() => {
      setContactFormStatus('success');
      setTimeout(() => setContactFormStatus('idle'), 5000);
    }, 1500);
  };

  const programs = [
    {
      title: "Business & Management",
      icon: <Building2 className="w-8 h-8" />,
      accent: "blue",
      items: ["Diploma in Business Management", "Certificate in HR Management", "Diploma in Sales and Marketing"],
      description: "Prepare for leadership roles in the modern corporate world with industry-led management strategies."
    },
    {
      title: "ICT & Technology",
      icon: <Monitor className="w-8 h-8" />,
      accent: "indigo",
      items: ["Diploma in Information Technology", "Certificate in IT Fundamentals", "Advanced Computer Packages"],
      description: "Master the digital landscape with hands-on training in computing, networking, and modern software."
    },
    {
      title: "Hospitality & Tourism",
      icon: <ChefHat className="w-8 h-8" />,
      accent: "emerald",
      items: ["Hotel & Catering Management", "Tours and Travel Operations", "Front Office Operations"],
      description: "Step into the vibrant world of hospitality with practical skills in hotel management and global tourism."
    },
    {
      title: "Accounting & Finance",
      icon: <Calculator className="w-8 h-8" />,
      accent: "rose",
      items: ["Certified Public Accountant (CPA)", "Accounting Technician (ATC)", "Certificate in French & English"],
      description: "Build a foundation in global finance and professional communication with our accredited certification paths."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Wambui",
      role: "Operations Manager",
      company: "Apex Business Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      testimonial: "Jobmark College transformed my professional outlook. The mentors truly care about our career paths. I landed a management role just two months after graduating!"
    },
    {
      name: "David Kiprotich",
      role: "Lead Systems Admin",
      company: "DataCloud Kenya",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      testimonial: "The hands-on approach to ICT at Jobmark is incredible. We spent more time in labs than lecture halls, which gave me the confidence for real-world technical challenges."
    },
    {
      name: "Faith Mutua",
      role: "Hospitality Lead",
      company: "Serena Hotels",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      testimonial: "The practical sessions in the college kitchen were my favorite. I felt perfectly prepared for my current role at a leading hotel chain."
    },
    {
      name: "John Kamau",
      role: "Procurement Officer",
      company: "Global Logistics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
      testimonial: "The Diploma in Purchasing and Supplies was market-relevant and intensive. The internship placement helped me secure my first job immediately."
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const faqs = [
    {
      question: "What are the entry requirements for Diploma courses?",
      answer: "Generally, a KCSE mean grade of C- (Minus) or equivalent is required for Diploma programs. For Certificate courses, a D (Plain) or above is acceptable. We also consider relevant work experience for mature students."
    },
    {
      question: "When are the next intake dates?",
      answer: "We have three major intakes per year: January, May, and September. However, we accept rolling applications for short courses and computer packages throughout the year."
    },
    {
      question: "Does the college offer hostel facilities?",
      answer: "While we do not have internal hostels, we have partnered with several secure, vetted student housing providers within walking distance of our Ruiru campus. Our admissions office helps students find suitable accommodation."
    },
    {
      question: "Are the courses recognized by TVET and the Ministry?",
      answer: "Yes, Jobmark College is fully registered and approved by the Ministry of Higher Education, Science and Technology, and we are an accredited TVET institution. Our certifications are recognized by employers nationwide."
    }
  ];

  const stats = [
    { icon: <GraduationCap className="w-5 h-5" />, value: "2,500+", label: "Graduates", color: "emerald" },
    { icon: <Globe className="w-5 h-5" />, value: "15+", label: "Programs", color: "blue" },
    { icon: <Briefcase className="w-5 h-5" />, value: "95%", label: "Placement", color: "indigo" },
    { icon: <Users2 className="w-5 h-5" />, value: "50+", label: "Partners", color: "rose" },
  ];

  const coreValues = [
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: "Integrity", 
      desc: "Operating with absolute transparency and ethical standards in all academic and administrative pursuits.",
      color: "blue"
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Innovation", 
      desc: "Constantly updating our curriculum to match the digital evolution of the global job market.",
      color: "indigo"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Excellence", 
      desc: "Striving for world-class quality in service delivery, tutoring, and student mentorship.",
      color: "emerald"
    },
    { 
      icon: <Users2 className="w-6 h-6" />, 
      title: "Inclusivity", 
      desc: "Fostering an environment that celebrates diversity and ensures equal opportunity for all learners.",
      color: "rose"
    }
  ];

  const accentStyles = {
    blue: "from-blue-600 to-blue-800 text-blue-600 bg-blue-50 border-blue-100 shadow-blue-500/10",
    indigo: "from-indigo-600 to-indigo-800 text-indigo-600 bg-indigo-50 border-indigo-100 shadow-indigo-500/10",
    emerald: "from-emerald-600 to-emerald-800 text-emerald-600 bg-emerald-50 border-emerald-100 shadow-emerald-500/10",
    rose: "from-rose-600 to-rose-800 text-rose-600 bg-rose-50 border-rose-100 shadow-rose-500/10"
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Header />

      <HeroGeometric 
        badge="ADMISSIONS OPEN 2024/25"
        title1="Bridge the Gap Between"
        title2="Learning & Success"
        subtext="Gain industry-recognized qualifications through Jobmark College's hands-on training in Ruiru. Elevate your career with market-ready skills."
        primaryCTA="Enroll Now"
        secondaryCTA="Speak to an Advisor"
        tertiaryCTA="View Courses"
      />

      <div className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-center">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <span className="text-slate-700 font-semibold tracking-wide text-sm md:text-lg">
            Registered and approved by the Ministry of Higher Education, Science and Technology.
          </span>
        </div>
      </div>

      {/* MODERNIZED ABOUT SECTION */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50/50 -skew-x-6 translate-x-32 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 space-y-4">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100"
             >
               Building Tomorrow's Leaders
             </motion.div>
             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-8xl font-black text-blue-950 uppercase tracking-tighter font-display leading-[0.9]">
               Legacy of <span className="text-blue-600">Practical</span> <br/> Excellence
             </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-slate-900 font-display uppercase tracking-tight leading-tight">
                  Modern Learning <br/><span className="text-blue-600 underline decoration-blue-100 underline-offset-8">At Bushgate Towers.</span>
                </h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  Located in the heart of Ruiru, Jobmark College is more than just a training center. We are a community of innovators, dedicated to equipping students with market-relevant skills that lead directly to career placement and professional growth.
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[2.5rem] bg-blue-950 text-white shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:rotate-12 transition-transform">
                    <Target className="w-16 h-16" />
                  </div>
                  <Target className="w-8 h-8 text-emerald-400 mb-6" />
                  <h4 className="text-xl font-black font-display uppercase tracking-tight mb-4">Our Mission</h4>
                  <p className="text-sm text-blue-100/60 leading-relaxed font-medium">
                    To provide accessible, high-quality, and hands-on training that transforms curious learners into industry experts.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:-rotate-12 transition-transform">
                    <Eye className="w-16 h-16 text-blue-900" />
                  </div>
                  <Eye className="w-8 h-8 text-blue-600 mb-6" />
                  <h4 className="text-xl font-black font-display uppercase tracking-tight mb-4 text-slate-900">Our Vision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    To be the leading vocational hub in East Africa, synonymous with professional competence and innovative excellence.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Styled Image Stack - RESIZED PROFESSIONALLY */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative max-w-md mx-auto w-full lg:mx-0"
            >
              <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15)] border-[8px] border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1523240715632-d984bb4b990a?auto=format&fit=crop&q=80&w=800" 
                  alt="Jobmark Environment" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent pointer-events-none" />
                
                {/* Floating Achievement Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/50">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-base font-black text-slate-950 uppercase tracking-tight leading-none mb-1">TVET Accredited</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Global Standards Ready</div>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative behind elements */}
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            </motion.div>
          </div>

          {/* Core Values Section */}
          <div className="pt-20 border-t border-slate-100">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-black text-slate-900 font-display uppercase tracking-widest">Our Shared <span className="text-blue-600">Values</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 transition-transform group-hover:rotate-6",
                    accentStyles[value.color as keyof typeof accentStyles]
                  )}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-black text-slate-950 font-display uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODERNIZED IMPACT SECTION (RESIZED & ENHANCED) */}
      <section className="bg-slate-950 py-20 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/50 via-transparent to-emerald-950/30 opacity-60" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] font-display uppercase tracking-tighter mb-4">
                Proven <span className="text-emerald-400">Impact.</span>
              </h2>
              <p className="text-blue-100/40 text-sm font-medium leading-relaxed mb-6">
                Our legacy is built on the success of our graduates, currently leading in sectors globally.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-xl border border-white/10 transition-all"
                onClick={() => window.location.href='#enroll'}
              >
                Join the Network <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                  className="relative group p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 text-center flex flex-col items-center justify-center min-w-[140px] transition-all"
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3",
                    stat.color === 'emerald' ? "bg-emerald-500/10 text-emerald-400" :
                    stat.color === 'blue' ? "bg-blue-500/10 text-blue-400" :
                    stat.color === 'indigo' ? "bg-indigo-500/10 text-indigo-400" :
                    "bg-rose-500/10 text-rose-400"
                  )}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-white font-display mb-1">{stat.value}</div>
                  <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30">{stat.label}</div>
                  
                  {/* Subtle Glow Effect */}
                  <div className={cn(
                    "absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity",
                    stat.color === 'emerald' ? "bg-emerald-500" :
                    stat.color === 'blue' ? "bg-blue-500" :
                    stat.color === 'indigo' ? "bg-indigo-500" :
                    "bg-rose-500"
                  )} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 font-display uppercase tracking-tighter">Featured Programs</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all flex flex-col group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${accentStyles[prog.accent as keyof typeof accentStyles]}`}>{prog.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 font-display leading-tight mb-4">{prog.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{prog.description}</p>
                <div className="space-y-3 mb-8">
                  {prog.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                      <ChevronRight className="w-3 h-3 text-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <button className="mt-auto w-full py-4 rounded-xl bg-slate-900 text-white font-bold text-sm uppercase group-hover:bg-blue-600 transition-all tracking-widest" onClick={() => window.location.href='#enroll'}>Enroll Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest border border-blue-100">
                  <Star className="w-3 h-3 fill-blue-600" />
                  <span>The Jobmark Advantage</span>
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight font-display uppercase leading-[0.9]">Why Students <span className="text-blue-600">Choose Us</span></h2>
                <p className="text-xl text-slate-600 font-medium"> We prepare you for real-world impact through technical expertise and professional mentorship in a world-class environment.</p>
              </div>
              <div className="grid gap-6">
                {[
                  { icon: <ShieldCheck className="text-blue-600" />, title: "Fully Accredited", desc: "Recognized and approved by the Ministry of Higher Education." },
                  { icon: <MapPin className="text-emerald-600" />, title: "Prime Location", desc: "Easily accessible modern campus at Bushgate Towers, Ruiru." },
                  { icon: <Users2 className="text-indigo-600" />, title: "Expert Faculty", desc: "Learning guided by highly qualified tutors with industry experience." }
                ].map((item, idx) => (
                  <motion.div key={idx} whileHover={{ x: 10 }} className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="p-4 bg-white rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">{React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}</div>
                    <div><h4 className="font-black text-slate-900 text-lg mb-1 font-display uppercase tracking-tight">{item.title}</h4><p className="text-slate-500 text-sm">{item.desc}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Lab" /></div>
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Collaboration" /></div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Class" /></div>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"><img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Graduate" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Slider Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">Alumni Network</div>
                <h2 className="text-4xl md:text-5xl font-black font-display uppercase leading-tight text-slate-900 tracking-tight">Our Impact <br/><span className="text-blue-600 italic text-3xl">Across East Africa</span></h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">Our graduates aren't just students; they are leaders occupying pivotal roles in hospitality, finance, and technology.</p>
              </div>
              <div className="relative group overflow-hidden rounded-[2rem] border-4 border-white shadow-xl aspect-video cursor-pointer">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Spotlight" />
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"><Play className="w-6 h-6 text-blue-900 ml-1" /></div>
                </div>
              </div>
            </div>
            
            {/* Automatic Testimonial Slider Showing 2 Testimonials */}
            <div className="lg:col-span-7 h-full flex flex-col justify-center">
              <div className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {testimonials.slice(testimonialIndex * 2, testimonialIndex * 2 + 2).map((test, i) => (
                      <Testimonial 
                        key={test.name}
                        {...test} 
                        className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-none h-full" 
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
                
                {/* Progress Indicators */}
                <div className="flex gap-2 mt-8 justify-center">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        testimonialIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN ADMISSIONS CALLOUT */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050335192-ce1de9073612?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900/90 to-emerald-950/80"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  <Calendar className="w-4 h-4" /> 2024/2025 Admissions Open
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white font-display leading-[0.9] uppercase">Step into your <br/><span className="text-emerald-400 italic">Greatness.</span></h2>
                <p className="text-blue-100/70 text-lg md:text-xl font-medium max-w-md">Gain practical skills in Business, ICT, and Hospitality at our modern Ruiru campus. Your journey to professional excellence starts here.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#enroll" className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center shadow-xl shadow-emerald-500/20">Apply Now</motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#programs" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center">Prospectus</motion.a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "January Intake", icon: <Clock className="w-6 h-6" />, color: "bg-blue-800/50" },
                  { label: "May Intake", icon: <Calendar className="w-6 h-6" />, color: "bg-emerald-800/50" },
                  { label: "September Intake", icon: <ArrowUpRight className="w-6 h-6" />, color: "bg-indigo-800/50" },
                  { label: "Short Courses", icon: <Zap className="w-6 h-6" />, color: "bg-slate-800/50" }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className={cn("p-6 rounded-[2rem] border border-white/10 text-white", item.color)}>
                    <div className="mb-4">{item.icon}</div>
                    <div className="font-black font-display uppercase text-sm tracking-tight">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: DEDICATED ENROLL NOW SECTION */}
      <section id="enroll" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none">
          <Sparkles className="w-96 h-96 text-blue-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  <UserCheck className="w-4 h-4" /> Secure Your Spot
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-display leading-[1] uppercase tracking-tighter">
                  Start Your <br/>Professional <br/><span className="text-blue-600">Legacy.</span>
                </h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">
                  Complete your application in under 5 minutes. Our automated review system ensures you get feedback on your eligibility within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <ClipboardCheck className="text-emerald-500" />, title: "Streamlined Process", desc: "No complex paperwork. Simple, digital, and efficient application." },
                  { icon: <ShieldCheck className="text-blue-500" />, title: "Certified Future", desc: "TVET recognized certificates that open doors across East Africa." },
                  { icon: <Award className="text-indigo-500" />, title: "Expert Support", desc: "Access to career counselors from the moment you apply." }
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex gap-6"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 font-display uppercase tracking-tight">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-white relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500" />
                <div className="mb-10 flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-slate-900 font-display uppercase tracking-tight">Application Portal</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Intake 2024/25</p>
                  </div>
                  <FileText className="w-10 h-10 text-slate-100" />
                </div>

                <form onSubmit={handleEnrollSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Legal Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Michael Otieno" 
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="e.g. michael@example.com" 
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Primary Phone</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="07XX XXX XXX" 
                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Preferred Program</label>
                      <select className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold appearance-none">
                        <option>Business Management (Diploma)</option>
                        <option>Information Technology (Diploma)</option>
                        <option>Hospitality & Catering (Diploma)</option>
                        <option>Certified Public Accountant (CPA)</option>
                        <option>Human Resource Management (Cert)</option>
                        <option>Tours and Travel (Cert)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      disabled={enrollFormStatus === 'sending'}
                      type="submit" 
                      className={cn(
                        "w-full py-6 rounded-2xl font-black font-display uppercase tracking-[0.3em] text-sm transition-all shadow-xl",
                        enrollFormStatus === 'success' ? "bg-emerald-500 text-white" : "bg-blue-900 text-white hover:bg-blue-800"
                      )}
                    >
                      {enrollFormStatus === 'idle' && "Complete Application"}
                      {enrollFormStatus === 'sending' && "Submitting Application..."}
                      {enrollFormStatus === 'success' && "Enrollment Started! Check Email."}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED MODERN FAQ SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-100/50">
                  <HelpCircle className="w-3.5 h-3.5" /> Discovery Hub
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-display uppercase tracking-tight leading-[0.9]">
                  Got <span className="text-blue-600">Questions?</span>
                </h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  We've compiled answers to the most frequent inquiries from our future students. Transparent, clear, and direct.
                </p>
              </div>

              <div className="bg-slate-950 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-20 h-20" /></div>
                <h4 className="font-display font-black uppercase tracking-wider text-xl mb-4">Need more help?</h4>
                <p className="text-blue-100/40 text-sm mb-8 font-medium leading-relaxed">Our career advisors are online and ready to guide your enrollment personally.</p>
                <a href="#contact" className="flex items-center justify-center w-full py-4 bg-white text-slate-950 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-emerald-400 transition-all">
                  Open Support Hub
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "rounded-[2.5rem] border transition-all duration-500 overflow-hidden",
                    openFaq === idx 
                      ? "bg-white border-blue-600 shadow-[0_20px_50px_-10px_rgba(30,58,138,0.1)]" 
                      : "bg-slate-50 border-slate-100 hover:border-blue-200"
                  )}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-10 py-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <span className={cn(
                        "text-sm font-black transition-colors duration-500",
                        openFaq === idx ? "text-blue-600" : "text-slate-300"
                      )}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className={cn(
                        "font-black text-slate-900 font-display text-lg uppercase tracking-tight leading-tight transition-colors duration-500",
                        openFaq === idx && "text-blue-600"
                      )}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                      openFaq === idx 
                        ? "bg-blue-600 text-white rotate-180" 
                        : "bg-white text-slate-400 group-hover:text-blue-600"
                    )}>
                      <ChevronRight className="w-5 h-5 rotate-90" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-10 pb-10 ml-14">
                          <div className="h-px w-12 bg-blue-100 mb-6" />
                          <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODERN CONTACT SECTION */}
      <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">Contact Us</div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-display uppercase tracking-tight leading-none">Let's start your <br/><span className="text-blue-600">Journey.</span></h2>
                <p className="text-slate-500 font-medium text-lg">Visit our campus or get in touch through our digital channels. We're here to guide you.</p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <MapPin className="w-6 h-6" />, title: "Visit Campus", detail: "Bushgate Towers, 2nd Floor, Ruiru", color: "text-blue-600" },
                  { icon: <Phone className="w-6 h-6" />, title: "Call Direct", detail: "0720 934264 / 0729 242331", color: "text-emerald-600" },
                  { icon: <Mail className="w-6 h-6" />, title: "Email Admissions", detail: "jobmarkco@yahoo.com", color: "text-indigo-600" }
                ].map((item, i) => (
                  <motion.div whileHover={{ x: 10 }} key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all group hover:border-blue-200">
                    <div className={cn("p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all", item.color)}>{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-display uppercase text-sm tracking-widest">{item.title}</h4>
                      <p className="text-slate-500 font-medium text-sm">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl relative">
                <div className="absolute top-10 right-10 opacity-5"><MessageSquare className="w-32 h-32 text-blue-900" /></div>
                <h3 className="text-2xl font-black text-slate-900 font-display uppercase tracking-tight mb-10 border-b border-slate-100 pb-6">General Enquiry</h3>
                <form onSubmit={handleContactSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Email Address</label>
                      <input required type="email" placeholder="jane@example.com" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Your Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 outline-none resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:bg-white transition-all font-semibold"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={contactFormStatus === 'sending'}
                    type="submit" 
                    className={cn(
                      "w-full py-6 rounded-2xl font-black font-display uppercase tracking-[0.2em] text-sm transition-all",
                      contactFormStatus === 'success' ? "bg-emerald-500 text-white" : "bg-blue-900 text-white hover:bg-blue-800"
                    )}
                  >
                    {contactFormStatus === 'idle' && "Send Message"}
                    {contactFormStatus === 'sending' && "Sending..."}
                    {contactFormStatus === 'success' && "Message Sent!"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer7 
        description="Jobmark College: A Ruiru-based leading TVET training institution providing market-relevant certificate and diploma programs since 2012." 
        copyright={`© ${new Date().getFullYear()} Jobmark College. Shaping Future Leaders.`} 
      />

      <motion.a
        href="https://wa.me/254720934264"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden"></div>
        <FaWhatsapp className="w-8 h-8 relative z-10" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};

export default App;
