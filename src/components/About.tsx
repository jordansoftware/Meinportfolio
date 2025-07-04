import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Sauberer Code',
      description: 'Schreiben von wartbarem, skalierbarem Code, der den Test der Zeit übersteht'
    },
    {
      icon: Palette,
      title: 'Kreatives Design',
      description: 'Verschmelzung von Ästhetik und Funktionalität für ein unvergessliches Benutzererlebnis'
    },
    {
      icon: Rocket,
      title: 'Leistung',
      description: 'Optimierung jedes Details für blitzschnelle, reibungslose Interaktionen'
    }
  ];

  return (
    <section id="Über mich" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Über mich

            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Ich bin ein Fullstack-Entwickler
                mit 3 Jahren Erfahrung in der Entwicklung moderner Webanwendungen mit React,
                TypeScript, Tailwind CSS im Frontend sowie Node.js, Express und NestJS im Backend. Ich arbeite regelmäßig mit REST-APIs, MongoDB, PostgreSQL, MySQL
                Mein Fokus liegt auf sauberem, wartbarem Code und der Entwicklung effizienter, nutzerzentrierter Lösungen.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Ich bin technologiebegeistert und verfüge über Erfahrung im IT-Support, wo ich technische Probleme schnell löse, Systeme warte und Benutzerumgebungen verwalte. 
                Mein Ziel ist es, einen reibungslosen und sicheren Betrieb der Infrastruktur zu gewährleisten, um den Arbeitsalltag der Teams zu erleichtern
              </p>

              <div className="pt-6">
                <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <a href="/cv/MonCV.pdf">
                  Lebenslaus Herunterladen
                  </a>
                  
                </button>
              </div>
            </div>

            {/* Right Side - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <item.icon size={24} className="text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;