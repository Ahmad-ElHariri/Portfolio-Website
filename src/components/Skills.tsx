import React, { useEffect, useRef } from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      title: "Frameworks & Tools",
      skills: ["FastAPI", "Express.js", "Node.js", "Postman", "GitHub", "Vercel", "Render"]
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Technologies",
      skills: ["Microsoft Graph APIs", "MongoDB", "Chrome Extensions", "REST APIs"]
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "AI & Automation",
      skills: ["N8N", "ReAct Agents", "RAGs", "Groq API", "Bolt.new"]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and modern applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 scroll-animate opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-700 font-medium">{skill}</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center scroll-animate opacity-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full-Stack Development",
              "AI Agent Development",
              "Workflow Automation",
              "API Integration",
              "Database Design",
              "Project Management",
              "Team Leadership",
              "Problem Solving"
            ].map((competency, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors cursor-default scroll-animate opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;