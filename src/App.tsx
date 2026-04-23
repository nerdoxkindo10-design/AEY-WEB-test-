/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  User, 
  Mail, 
  CheckCircle2,
  Menu,
  X,
  Wind,
  Sparkles,
  Droplets
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-cream py-4 border-b border-brand-border shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="text-brand-olive w-6 h-6" />
          <span className="font-serif text-2xl tracking-[0.2em] uppercase font-light">akit spa</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-widest font-medium">
          <a href="#services" className="text-brand-stone hover:text-brand-ink transition-colors underline-offset-custom">Services</a>
          <a href="#about" className="text-brand-stone hover:text-brand-ink transition-colors underline-offset-custom">About</a>
          <div className="h-4 w-[1px] bg-brand-border hidden lg:block"></div>
          <a href="tel:0629843661" className="text-brand-ink font-sans font-medium tracking-tighter">06 29 84 36 61</a>
          <a href="#reserve" className="bg-brand-olive hover:bg-brand-ink text-white px-8 py-3 rounded-xl transition-all transform hover:scale-105 font-medium shadow-lg shadow-brand-olive/20 tracking-wide">Reserve</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-cream border-b border-brand-stone/20 px-6 py-8 flex flex-col gap-6 text-center text-lg font-serif"
          >
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)}>Experience</a>
            <a href="#reserve" onClick={() => setIsOpen(false)} className="bg-brand-olive text-white py-3 rounded-full">Book Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-cream px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 space-y-8"
        >
          <div className="inline-block px-3 py-1 bg-brand-badge text-brand-stone text-xs tracking-widest uppercase rounded-full">
            Est. 2024 • Luxury Wellness
          </div>
          <h1 className="text-7xl md:text-8xl leading-[0.9] font-light text-brand-ink font-serif">
            Reclaim your <br/><span className="italic text-brand-olive">inner peace.</span>
          </h1>
          <p className="text-lg text-brand-olive leading-relaxed max-w-md font-sans font-light">
            Experience bespoke treatments designed to harmonize body and mind. Akit Spa offers a sanctuary of silence in the heart of the city.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-gold"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-stone text-[8px] flex items-center justify-center text-white">MK</div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-olive"></div>
            </div>
            <p className="text-xs font-sans text-brand-stone flex items-center">
              Join 500+ monthly guests seeking tranquility
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#reserve" className="bg-brand-olive hover:bg-brand-ink text-white px-10 py-4 rounded-xl text-sm uppercase tracking-widest font-medium transition-all shadow-lg shadow-brand-olive/20 text-center">
              Request Appointment
            </a>
            <a href="tel:0629843661" className="bg-white border border-brand-border text-brand-ink px-10 py-4 rounded-xl text-sm uppercase tracking-widest font-medium hover:bg-brand-badge transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> 06 29 84 36 61
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <div className="aspect-[4/5] w-[350px] md:w-[450px] rounded-[40px] overflow-hidden shadow-2xl relative z-10 border border-brand-badge">
              <img 
                src="https://images.unsplash.com/photo-1544161515-436cefed1f6d?auto=format&fit=crop&q=80&w=1000" 
                alt="Spa interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-olive/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-stone/10 rounded-full blur-3xl -z-0" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-10 text-brand-stone/50 hidden lg:block"
      >
        <div className="w-[1px] h-12 bg-brand-border mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const ServiceCard = ({ title, description, price, duration, image, icon: Icon }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-stone/10"
    >
      <div className="h-64 overflow-hidden relative group">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
          <Icon className="w-5 h-5 text-brand-olive" />
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif">{title}</h3>
          <span className="text-brand-gold font-medium">{price}</span>
        </div>
        <p className="text-brand-stone text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-brand-olive/60">
          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {duration}</span>
          <div className="w-1 h-1 rounded-full bg-brand-stone/30" />
          <span className="hover:text-brand-olive cursor-pointer flex items-center gap-1.5">View Details <ChevronRight className="w-3 h-3" /></span>
        </div>
      </div>
    </motion.div>
  );
};

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Signature Swedish Massage",
    "Deep Tissue Therapy",
    "Botanical Glow Facial",
    "Aromatherapy Escape",
    "Hot Stone Serenity",
    "Full Spa Day Package"
  ];

  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[2rem] text-center shadow-xl max-w-lg mx-auto">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-brand-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-brand-olive" />
        </motion.div>
        <h3 className="text-3xl font-serif mb-4 text-brand-ink">Reservation Requested</h3>
        <p className="text-brand-stone mb-8">
          Thank you, {formData.name}. We've received your request for a {formData.service}. Our team will contact you shortly to confirm your booking.
        </p>
        <button 
          onClick={() => { setIsSuccess(false); setStep(1); }}
          className="text-brand-olive font-semibold hover:underline"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-brand-ink/5 max-w-2xl mx-auto border border-brand-badge">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-serif mb-2 text-brand-ink">Reserve Your Escape</h3>
        <p className="text-sm font-sans text-brand-stone">Select your preferred treatment time.</p>
        <div className="w-24 h-[1px] bg-brand-border mx-auto mt-6" />
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Select Ritual</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({...formData, service: s})}
                      className={`text-left p-4 rounded-xl border text-sm transition-all ${formData.service === s ? 'bg-brand-olive text-white border-brand-olive' : 'bg-brand-cream border-transparent hover:border-brand-stone/30'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-brand-cream border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-brand-stone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Time</label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-brand-cream border-none rounded-xl px-4 py-3 text-sm outline-none appearance-none"
                    >
                      <option value="">Select Time</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <button 
                type="button"
                disabled={!formData.service || !formData.date || !formData.time}
                onClick={() => setStep(2)}
                className="w-full bg-brand-olive hover:bg-brand-ink text-white py-4 rounded-xl font-medium transition-colors tracking-wide shadow-lg shadow-brand-olive/20 disabled:opacity-50"
              >
                Next Step
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-cream border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-brand-stone"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-brand-cream border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-brand-stone"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-stone mb-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="06 29 84 36 61"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-brand-cream border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-brand-stone"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-brand-badge text-brand-stone py-4 rounded-xl font-medium transition-all"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[2] bg-brand-olive hover:bg-brand-ink text-white py-4 rounded-xl font-medium transition-colors tracking-wide shadow-lg shadow-brand-olive/20"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Request'} 
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const services = [
    {
      title: "Signature Swedish",
      description: "A classic full-body massage designed for relaxation, circulation boost, and overall wellness using botanical oils.",
      price: "$85",
      duration: "60 Min",
      image: "https://images.unsplash.com/photo-1544161515-436cefed1f6d?auto=format&fit=crop&q=80&w=800",
      icon: Wind
    },
    {
      title: "Botanical Glow",
      description: "Our organic facial treatment using mountain herbs and antioxidants to restore your natural radiance.",
      price: "$110",
      duration: "75 Min",
      image: "https://images.unsplash.com/photo-1570172619667-da2949579603?auto=format&fit=crop&q=80&w=800",
      icon: Sparkles
    },
    {
      title: "Hydrotherapy",
      description: "Immerse yourself in mineral-rich thermal waters infused with lavender and eucalyptus essential oils.",
      price: "$65",
      duration: "45 Min",
      image: "https://images.unsplash.com/photo-1533221379374-12347101a1bd?auto=format&fit=crop&q=80&w=800",
      icon: Droplets
    }
  ];

  const stats = [
    { label: "Satisfied Clients", value: "12k+" },
    { label: "Expert Therapists", value: "15" },
    { label: "Holistic Awards", value: "08" },
    { label: "Quiet Hours", value: "∞" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Stats Bar */}
      <div className="bg-brand-olive text-brand-cream py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-4xl font-serif tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-32 bg-brand-cream relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-olive/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-stone uppercase tracking-widest text-xs font-bold mb-4 block">Our Offerings</span>
              <h2 className="text-5xl md:text-6xl text-brand-ink leading-tight">Curated treatments for <br /> <span className="italic">lasting calm</span></h2>
            </div>
            <p className="text-brand-stone max-w-sm mb-2 font-light leading-relaxed">
              We blend ancient wisdom with modern botanical science to create deeply effective wellness rituals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" 
                  alt="Spa Sanctuary" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive/5 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-stone/5 rounded-full blur-3xl -z-0" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -left-12 w-32 h-32 md:w-48 md:h-48 z-20"
              >
                <div className="w-full h-full border border-dashed border-brand-olive/20 rounded-full flex items-center justify-center p-4">
                  <div className="text-[8px] md:text-[10px] text-brand-olive uppercase tracking-[0.3em] text-center font-bold">
                    Natural • Organic • Holistic • akit spa
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <span className="text-brand-stone uppercase tracking-widest text-xs font-bold">Philosophy</span>
              <h2 className="text-5xl md:text-6xl text-brand-ink leading-tight">Where nature meets <br /><span className="italic">tranquility</span></h2>
              <div className="space-y-6 text-brand-stone font-light leading-relaxed text-lg">
                <p>
                  At akit spa, we believe that true beauty radiates from a peaceful state of mind. Founded in the heart of nature, our sanctuary is designed to strip away the stress of modern life.
                </p>
                <p>
                  Every ingredient we use is ethically sourced and 100% organic, ensuring that your body receives only the purest botanical extracts during your treatment.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-brand-olive" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Organic Products</h4>
                    <p className="text-xs text-brand-stone leading-relaxed">Sustainably sourced botanical minerals.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-brand-olive" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Expert Care</h4>
                    <p className="text-xs text-brand-stone leading-relaxed">Certified holistic therapy masters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-32 bg-brand-cream relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 border border-brand-olive/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border border-brand-stone/20 rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
          <span className="text-brand-stone uppercase tracking-widest text-xs font-bold mb-4 block">Self Care</span>
          <h2 className="text-5xl md:text-6xl text-brand-ink leading-tight mb-6">Begin your <br /><span className="italic">enlightenment</span></h2>
        </div>

        <div className="px-6">
          <ReservationForm />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-brand-ink text-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-cream/40 uppercase tracking-widest text-xs font-bold mb-4 block">Wall of Serenity</span>
            <h2 className="text-5xl font-serif">Kind words from our family</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "The most grounding experience I've had in years. The botanical facial left my skin feeling incredible.", author: "Elena R.", role: "Creative Director" },
              { text: "Professional, warm, and deeply relaxing. Akit spa is my essential monthly ritual for mental clarity.", author: "Mark S.", role: "Tech Founder" },
              { text: "Pure magic. The moment you walk in, the scent of lavender and eucalyptus transports you elsewhere.", author: "Sofia V.", role: "Yoga Instructor" }
            ].map((t, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-lg italic font-light leading-relaxed mb-8">"{t.text}"</p>
                <div>
                  <div className="font-serif text-xl">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-cream py-12 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-brand-stone font-sans text-xs uppercase tracking-widest">
          <div className="text-center md:text-left">Located at Rue de la Paix, Paris, 75002</div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <span>Mon-Sun: 09:00 - 21:00</span>
            <span className="text-brand-olive font-bold">akit spa © 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
