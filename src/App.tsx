/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  CheckCircle2,
  Menu,
  X,
  Building2,
  Rocket,
  ShoppingBag,
  Calculator,
  FileText,
  Briefcase,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-950 rounded flex items-center justify-center">
            <BarChart3 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold text-brand-950 tracking-tight">LUMINA <span className="font-light text-slate-400">ADVISORY</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Who We Help', 'Why Us', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold text-slate-600 hover:text-brand-500 transition-colors uppercase tracking-wider">
              {item}
            </a>
          ))}
          <button className="bg-brand-950 hover:bg-brand-900 text-white px-7 py-2.5 rounded text-sm font-bold transition-all uppercase tracking-widest">
            Consultation
          </button>
        </div>

        <button className="md:hidden text-brand-950" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Services', 'Who We Help', 'Why Us', 'Team'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-bold text-slate-800" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-950 text-white px-6 py-4 rounded font-bold uppercase tracking-widest">
                Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-brand-500" />
              <span className="text-brand-500 text-xs font-bold uppercase tracking-[0.3em]">Established 1998</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-950 leading-tight mb-8">
              Precision in Accounting. <br />
              <span className="italic font-normal text-slate-500">Excellence in Strategy.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Lumina Advisory provides high-level accounting, tax, and strategic financial services for businesses that demand excellence. We turn complex numbers into clear pathways for growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="w-full sm:w-auto bg-brand-950 hover:bg-brand-900 text-white px-10 py-4 rounded text-lg font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                Schedule a Meeting
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-950 px-10 py-4 rounded text-lg font-bold transition-all border border-slate-200 uppercase tracking-widest">
                Our Services
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-wrap items-center gap-12"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-accent">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-500 text-sm font-medium">Trusted by over <span className="text-brand-950 font-bold">500+</span> Corporate Clients</p>
            </div>
            <div className="flex items-center gap-8 opacity-60 grayscale">
              <span className="font-display font-bold text-lg tracking-tighter">FINANCIAL TIMES</span>
              <span className="font-display font-bold text-lg tracking-tighter">THE ECONOMIST</span>
              <span className="font-display font-bold text-lg tracking-tighter">BLOOMBERG</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhoWeHelp = () => {
  const segments = [
    {
      title: "Corporate Entities",
      description: "Comprehensive audit, compliance, and tax structuring for established corporations.",
      icon: Building2,
    },
    {
      title: "High-Growth Ventures",
      description: "Strategic financial planning and CFO advisory for rapidly scaling businesses.",
      icon: Rocket,
    },
    {
      title: "Private Wealth",
      description: "Bespoke tax planning and asset management for individuals and family offices.",
      icon: Award,
    }
  ];

  return (
    <section id="who-we-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {segments.map((s, i) => (
            <div key={i} className="group p-8 border-l border-slate-100 hover:border-brand-500 transition-all">
              <div className="w-12 h-12 text-brand-950 mb-8">
                <s.icon className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-950 mb-4">{s.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{s.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-950 uppercase tracking-widest group-hover:text-brand-500 transition-colors">
                Details <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Audit & Assurance", icon: ShieldCheck, desc: "Rigorous independent audits to ensure transparency and stakeholder confidence." },
    { title: "Tax Advisory", icon: FileText, desc: "Sophisticated tax planning and compliance for domestic and international entities." },
    { title: "CFO Services", icon: TrendingUp, desc: "High-level financial leadership to navigate complex market conditions." },
    { title: "Risk Management", icon: Briefcase, desc: "Identifying and mitigating financial risks to protect your business assets." }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-6">Our Core Expertise</h2>
          <p className="text-lg text-slate-600">We provide a full spectrum of professional accounting and advisory services tailored to the needs of modern organizations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-shadow p-10 rounded-sm">
              <div className="w-10 h-10 text-brand-500 mb-8">
                <s.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-brand-950 mb-4">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-brand-950 hover:text-brand-500 transition-colors">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-8">Why Lumina Advisory?</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              For over two decades, we have been the trusted partner for businesses seeking more than just a bookkeeper. We are strategic advisors committed to your long-term success.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0">
                  <Clock className="text-brand-950 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-950 mb-2">Decades of Experience</h4>
                  <p className="text-slate-500 text-sm">Our partners bring a combined 60+ years of high-level financial expertise.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded bg-slate-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-brand-950 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-950 mb-2">Uncompromising Integrity</h4>
                  <p className="text-slate-500 text-sm">We adhere to the highest ethical standards in every engagement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-10 rounded-sm text-center">
              <div className="text-5xl font-serif font-bold text-brand-950 mb-2">25+</div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div className="bg-brand-950 p-10 rounded-sm text-center text-white">
              <div className="text-5xl font-serif font-bold text-white mb-2">500+</div>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-bold">Active Clients</p>
            </div>
            <div className="bg-slate-900 p-10 rounded-sm text-center text-white col-span-2">
              <div className="text-5xl font-serif font-bold text-white mb-2">$2.4B</div>
              <p className="text-xs text-slate-300 uppercase tracking-widest font-bold">Assets Under Advisory</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Sarah Chen, CPA", role: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Director of Tax", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Rodriguez", role: "Head of Advisory", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-6">Our Leadership</h2>
          <p className="text-lg text-slate-600">Our firm is led by industry veterans with a deep commitment to client success and professional excellence.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <div key={i} className="bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-950 mb-1">{m.name}</h3>
              <p className="text-sm text-brand-500 font-bold uppercase tracking-widest mb-4">{m.role}</p>
              <div className="h-px w-10 bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-950 pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <BarChart3 className="text-brand-950 w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">LUMINA <span className="font-light text-slate-400">ADVISORY</span></span>
            </div>
            <p className="max-w-sm mb-10 leading-relaxed text-slate-400">
              Providing professional accounting, tax, and advisory services for businesses that demand excellence and precision.
            </p>
            <div className="flex gap-6">
              {['LinkedIn', 'Twitter', 'Insights'].map(link => (
                <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CFO Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>1200 Financial District</li>
              <li>New York, NY 10005</li>
              <li>+1 (212) 555-0198</li>
              <li>contact@lumina-advisory.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          <p>© 2026 Lumina Advisory Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Regulatory</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-950 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <WhyUs />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
