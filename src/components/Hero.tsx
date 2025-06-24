import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('Über mich')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home Seite" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="blob blob-1 absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-xl animate-blob"></div>
        <div className="blob blob-2 absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        <div className="blob blob-3 absolute -bottom-20 left-40 w-80 h-80 bg-gradient-to-r from-teal-400/30 to-blue-500/30 rounded-full blur-xl animate-blob animation-delay-4000"></div>
        <div className="blob blob-4 absolute bottom-20 right-40 w-64 h-64 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-full blur-xl animate-blob animation-delay-6000"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hi, ich bin
              </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Michael Jordan Boudi
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in-delay">
            Full Stack Developer & UI/UX Enthusiast. Ich erschaffe magische digitale Erlebnisse mit modernsten Technologien und flüssigem Design.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-2">
            {[
              { icon: Github, href: 'https://www.github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/michael-jordan-boudi-80469b164/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:boudimichaeljordan@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} className="text-white group-hover:text-blue-200 transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-delay-3"
          >
            <span>Entdecken Sie meine Arbeit</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;