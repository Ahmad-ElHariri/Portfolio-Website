import React, { useEffect, useRef } from 'react';
import { Code, Brain, Users, Award } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI Engineer",
      description: "Building intelligent agents using N8N and FastAPI"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Full-Stack Development",
      description: "Creating full-stack applications with modern technologies"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community Leadership",
      description: "Leading impactful student initiatives and projects"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Innovation",
      description: "Winning hackathons and launching accessible tools"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="scroll-animate opacity-0">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm Ahmad El Hariri, a Computer Science student at the American University of Beirut 
              and an AI Engineering Intern at EDM. With a passion for intelligent systems and automation, 
              I've built AI agents using N8N, developed full-stack applications, 
              and led impactful student initiatives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              From winning hackathons to launching accessible tools for deaf individuals, I merge creativity, 
              technical skills, and community leadership to solve real-world problems. My journey 
              combines academic excellence with practical innovation, always seeking to make technology 
              more accessible and impactful.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Computer Science @ AUB
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                AI Engineering Intern
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Community Leader
              </span>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 scroll-animate opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;