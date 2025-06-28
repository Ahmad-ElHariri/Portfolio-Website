import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Turbo Motors",
      description: "Full-stack car rental application with comprehensive booking system and user management.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB"],
      liveUrl: "https://turbo-motors-j54g.onrender.com",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Vid2Sign",
      description: "Chrome extension converting captions into sign language visuals. Won 3rd place in 'Code for Inclusion' hackathon.",
      image: "https://raw.githubusercontent.com/Ahmad-ElHariri/Portfolio-Website/main/images/vid2sign.jpg",
      technologies: ["JavaScript", "Chrome API", "Python"],
      githubUrl: "#",
      award: "3rd Place - Code for Inclusion Hackathon"
    },
    {
      title: "MyToolkit",
      description: "Web platform showcasing psychology books for all ages with intuitive categorization and search.",
      image: "https://raw.githubusercontent.com/Ahmad-ElHariri/Portfolio-Website/main/images/MyToolkit.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mytoolkit-books.vercel.app",
      githubUrl: "#"
    },
    {
      title: "Product Management Agent",
      description: "AI agent that fetches emails, detects project issues, and extracts tasks using LLMs for automated workflow management.",
      image: "https://raw.githubusercontent.com/Ahmad-ElHariri/Portfolio-Website/main/images/agent.png",
      technologies: ["FastAPI", "Groq", "Microsoft Graph"],
      githubUrl: "#"
    },
    {
      title: "Amazon Mentorship Platform",
      description: "Currently building an AI-driven short video learning platform for enhanced educational experiences.",
      image: "https://raw.githubusercontent.com/Ahmad-ElHariri/Portfolio-Website/main/images/amazon.png",
      technologies: ["In Progress"],
      status: "In Development"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work spanning AI engineering, full-stack development, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 scroll-animate opacity-0 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.title === "MyToolkit" || project.title === "Turbo Motors" 
                      ? "object-contain bg-gray-100" 
                      : "object-cover"
                  }`}
                />
                {project.status && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.award && (
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      🏆 {project.award}
                    </span>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;