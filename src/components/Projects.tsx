import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kollaboratives Budget',
      description: 'Webanwendung zur Verwaltung eines gemeinsamen Budgets in Echtzeit mit Ausgabenverfolgung, Visualisierungen und Multi-User-Synchronisation.',
      image: 'https://images.wondershare.com/pdfelement/top-pdf-software/comparison-budgeting-apps-for-students.jpg',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'

    },
    {
      title: 'Eintrittstickets APP',
      description: 'Mobile Anwendung zur Erstellung und zum Scannen von Eintrittstickets mit QR-Codes.',
      image: 'https://passkit.com/blog/wp-content/uploads/2024/09/two-qr-code-tickets.webp',
      tech: ['React Native', 'React Native SVG', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'

    },
    {
      title: 'Personal UI Kit FIGMA',
      description: 'Ein sauber strukturiertes UI Kit mit wiederverwendbaren Komponenten für Web-Apps.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*kkYg_lUH1OdYCOew.jpg',
      tech: ['Figma'],
      liveUrl: 'https://www.figma.com/file/xxxxx',
      githubUrl: '#'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interaktives 3D-Portfolio mit WebGL-Animationen und immersivem Benutzererlebnis.',
      image: 'https://vanschneider.com/blog/content/images/wp-content/uploads/2018/08/machineast_portfolio.jpg',
      tech: ['Three.js', 'React', 'WebGL', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Ausgaben-Tracker',
      description: 'Einfache App zur Verfolgung deiner Ausgaben mit Gesamtübersicht und Kategorien.',
      image: 'https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/quickbooks-online/web/image/feature/mobile-track-expenses-feature-qbo-us-desktop@2x.jpg',
      tech: ['React', 'useState', 'LocalStorage'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Automatisierung mit n8n',
      description: 'Workflow zur automatischen Synchronisation von Google Sheets zu Notion, um Kontakte aktuell zu halten.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*G-5F38rBStjlMNwd.png',
      tech: ['n8n', 'Google Sheets', 'Notion', 'Webhook'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projekt" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-l from-teal-500/20 to-green-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Besondere Projekte
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-blue-200 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;