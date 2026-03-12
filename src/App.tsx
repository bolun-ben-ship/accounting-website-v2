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
  Zap, 
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
  TrendingUp
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">Lumina</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Who We Help', 'Why Us', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-brand-500 hover:bg-brand-500/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-500/20">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-900 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Services', 'Who We Help', 'Why Us', 'Team'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-medium text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-500 text-white px-6 py-3 rounded-full text-center font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/20 via-brand-950/80 to-brand-950 z-10" />
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Abstract shapes */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>Modern Financial Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[1.1] mb-8">
              Grow Your Business. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
                We'll Handle the Numbers.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Experience the next generation of accounting. We combine expert human insight with cutting-edge technology to give you total financial clarity.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-500/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/10">
                View Our Services
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-950 bg-slate-800" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                  <span className="font-bold ml-1 text-white">4.9/5</span>
                </div>
                <p className="text-slate-500 text-xs">on Google Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
              <span className="font-display font-bold text-xl">FORBES</span>
              <span className="font-display font-bold text-xl">TECHCRUNCH</span>
              <span className="font-display font-bold text-xl">WIRED</span>
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
      title: "For Startups",
      description: "Scale faster with automated bookkeeping and R&D tax credit advisory.",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      title: "For Established SMEs",
      description: "Optimize your cash flow and strategic planning with a dedicated virtual CFO.",
      icon: Building2,
      color: "text-emerald-400"
    },
    {
      title: "For E-commerce",
      description: "Seamlessly integrate your store data from Shopify, Amazon, and Stripe.",
      icon: ShoppingBag,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="who-we-help" className="py-24 bg-brand-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Tailored for Your Growth</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We don't believe in one-size-fits-all. Our solutions are built for the specific challenges of your industry.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${s.color}`}>
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{s.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{s.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-500 group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Accounting", icon: Calculator, desc: "Full-cycle bookkeeping and financial reporting you can trust." },
    { title: "Tax Strategy", icon: FileText, desc: "Proactive planning to minimize liability and maximize returns." },
    { title: "CFO Advisory", icon: TrendingUp, desc: "Strategic financial leadership to drive your business forward." },
    { title: "Corp Secretarial", icon: Briefcase, desc: "Hassle-free compliance and governance for your entity." }
  ];

  return (
    <section id="services" className="py-24 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Comprehensive Financial Suite</h2>
            <p className="text-slate-400">Everything you need to manage your business finances in one place.</p>
          </div>
          <button className="text-brand-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass glass-hover p-8 rounded-3xl group cursor-pointer">
              <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
                <s.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="glass p-10 rounded-[40px] relative z-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">100% Xero Integrated</h4>
                    <p className="text-slate-400 text-sm">Real-time data synchronization with your favorite tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Users className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Dedicated Manager</h4>
                    <p className="text-slate-400 text-sm">A human expert who actually understands your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Bank-Level Security</h4>
                    <p className="text-slate-400 text-sm">Your financial data is protected with enterprise encryption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">The Differentiator</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We've reimagined accounting from the ground up. No more chasing receipts or waiting months for reports.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-display font-bold text-brand-500 mb-2">98%</div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Client Retention</p>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-500 mb-2">24/7</div>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Real-time Access</p>
              </div>
            </div>
            <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/10">
              Our Methodology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Sarah Chen", role: "Founding Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { name: "Marcus Thorne", role: "Head of Tax", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
    { name: "Elena Rodriguez", role: "CFO Advisory", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="team" className="py-24 bg-brand-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Meet the Experts</h2>
          <p className="text-slate-400">The brilliant minds behind your financial success.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
                <img 
                  src={m.img} 
                  alt={m.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{m.name}</h3>
              <p className="text-brand-500 font-medium">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-20 bg-brand-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-12">Seamlessly Integrated With</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 hover:opacity-100 transition-opacity">
          {['Xero', 'QuickBooks', 'Gusto', 'Stripe', 'Expensify', 'Hubdoc'].map(tech => (
            <span key={tech} className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">Lumina</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Redefining accounting for the modern age. We provide the clarity you need to build the future.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all cursor-pointer">
                  <div className="w-4 h-4 bg-slate-400 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 Lumina Accounting Group. All rights reserved.</p>
          <p>Designed for the future of finance.</p>
        </div>
      </div>
    </footer>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-brand-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full translate-y-1/2" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[48px] text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready for financial clarity?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of high-growth companies who trust Lumina to handle their numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-500/90 text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl shadow-brand-500/20">
              Schedule a Free Consultation
            </button>
            <button className="w-full sm:w-auto text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Pricing <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhoWeHelp />
        <Services />
        <WhyUs />
        <Team />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
