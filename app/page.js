'use client';

import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Package, FileText, Zap, Target, TrendingUp, Clock, CheckCircle, ArrowRight, Mail, Calendar } from 'lucide-react';

export default function FreelancerWebsite() {
  const [activeTab, setActiveTab] = useState('services');
  const [progress, setProgress] = useState(0);
  const [isHiring, setIsHiring] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', details: '', timeline: ''
  });

  // Simulate progress animation on load
  useEffect(() => {
    const timer = setTimeout(() => setProgress(67), 500);
    return () => clearTimeout(timer);
  }, []);

  // Private goal data (only you can see the actual amounts)
  const goalData = {
    currentRevenue: 6700, // Private
    targetRevenue: 10000, // Private
    percentage: 67, // Public: shown as progress
    projectsCompleted: 12,
    activeClients: 5,
    estimatedDaysToGoal: 45
  };

  const services = [
    {
      id: 'ui-framework',
      title: 'Fast UI with Framework',
      icon: <Zap className="w-8 h-8" />,
      description: 'Lightning-fast, responsive UIs built with your choice of Next.js, Nuxt.js, or Laravel Livewire',
      features: ['React/Vue expertise', 'Server-side rendering', 'Optimized performance', 'Mobile-first design'],
      priceRange: '$800 - $2,500',
      delivery: '5-14 days'
    },
    {
      id: 'full-website',
      title: 'Full Website Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Complete website solutions from concept to deployment, tailored to your business needs',
      features: ['Custom design', 'CMS integration', 'SEO optimization', 'Hosting setup'],
      priceRange: '$1,500 - $5,000',
      delivery: '2-4 weeks'
    },
    {
      id: 'misc-work',
      title: 'Miscellaneous Tasks',
      icon: <Package className="w-8 h-8" />,
      description: 'Flexible support for various tasks including data entry, gift packing, and administrative work',
      features: ['Data entry', 'Document processing', 'Gift packing services', 'General assistance'],
      priceRange: '$15 - $50/hour',
      delivery: 'Flexible'
    },
    {
      id: 'custom-request',
      title: 'Custom Labor Request',
      icon: <FileText className="w-8 h-8" />,
      description: 'Have a unique project in mind? Request custom labor and let\'s discuss your specific needs',
      features: ['Tailored solutions', 'Flexible scope', 'Collaborative approach', 'Creative problem-solving'],
      priceRange: 'Custom quote',
      delivery: 'Negotiable'
    }
  ];

  const milestones = [
    { label: 'Getting Started', progress: 100, completed: true },
    { label: 'Building Portfolio', progress: 100, completed: true },
    { label: 'Growing Client Base', progress: 67, completed: false },
    { label: 'Financial Freedom', progress: 20, completed: false }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your interest! I\'ll get back to you within 24 hours.');
    setIsHiring(false);
    setFormData({ name: '', email: '', service: '', details: '', timeline: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12 animate-in" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Build. Ship. Scale.
            </h1>
            <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
              Freelance developer on a mission to financial freedom. Join my journey and let's build something amazing together.
            </p>
            <button 
              onClick={() => setIsHiring(true)}
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-indigo-500/50 flex items-center gap-2 mx-auto"
            >
              Hire Me Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Progress Dashboard */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 shadow-2xl animate-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s', animationFillMode: 'both' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Revenue Journey</h2>
              </div>
              <div className="text-right">
                <div className="text-4xl font-black text-indigo-400">{goalData.percentage}%</div>
                <div className="text-sm text-slate-400">To Target</div>
              </div>
            </div>

            {/* Main Progress Bar */}
            <div className="mb-8">
              <div className="h-6 bg-slate-700 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-slate-400 text-sm">Projects Completed</span>
                </div>
                <div className="text-3xl font-bold">{goalData.projectsCompleted}</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <span className="text-slate-400 text-sm">Active Clients</span>
                </div>
                <div className="text-3xl font-bold">{goalData.activeClients}</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <span className="text-slate-400 text-sm">Est. Days to Goal</span>
                </div>
                <div className="text-3xl font-bold">{goalData.estimatedDaysToGoal}</div>
              </div>
            </div>

            {/* Milestone Progress */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                Journey Milestones
              </h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500' : 'bg-slate-700'}`}>
                    {milestone.completed ? <CheckCircle className="w-5 h-5" /> : <div className="w-3 h-3 rounded-full bg-slate-500"></div>}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{milestone.label}</span>
                      <span className="text-sm text-slate-400">{milestone.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${milestone.completed ? 'bg-green-500' : 'bg-indigo-500'}`}
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            What I Can Build For You
          </h2>
          <p className="text-xl text-slate-400">Choose from my service offerings or request custom work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-indigo-500 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 cursor-pointer"
              style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s`, animationFillMode: 'both' }}
              onClick={() => {
                setSelectedService(service);
                setIsHiring(true);
                setFormData({...formData, service: service.title});
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{service.title}</h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-indigo-400">{service.priceRange}</div>
                  <div className="text-sm text-slate-500">Delivery: {service.delivery}</div>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Modal */}
      {isHiring && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full border border-slate-700 shadow-2xl animate-in" style={{ animation: 'slideInUp 0.4s ease-out' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Let's Work Together</h2>
              <button onClick={() => setIsHiring(false)} className="text-slate-400 hover:text-white text-2xl">×</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select a service...</option>
                  {services.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea 
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  rows="4"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Timeline</label>
                <input 
                  type="text"
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="e.g., 2 weeks, ASAP, Flexible"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-slate-400 mb-4">Ready to start your project? Let's make it happen.</p>
          <p className="text-sm text-slate-600">© 2026 Your Name. Building the future, one project at a time.</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}
