import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning dashboard for predictive analytics with interactive data visualizations.',
      image: 'https://images.pexels.com/photos/7972995/pexels-photo-7972995.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'React', 'TensorFlow', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social platform with messaging, story features, and content recommendation engine.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'WebSocket', 'MongoDB', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio with WebGL animations and immersive user experience.',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Three.js', 'React', 'WebGL', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Automated trading system with risk management and real-time market analysis.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management Suite',
      description: 'Collaborative project management tool with real-time updates and team analytics.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
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
              Featured Projects
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