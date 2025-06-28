import React, { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      label: "Email",
      value: "elhariri2023@gmail.com",
      href: "mailto:elhariri2023@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6 text-gray-800" />,
      label: "GitHub",
      value: "github.com/Ahmad-ElHariri",
      href: "https://github.com/Ahmad-ElHariri"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-700" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ahmadel-hariri",
      href: "https://linkedin.com/in/ahmadel-hariri"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      label: "WhatsApp",
      value: "Chat with me",
      href: "https://wa.me/qr/WGRY3AEFM5DSL1"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      label: "Location",
      value: "Beirut, Lebanon",
      href: null
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="scroll-animate opacity-0">
            
            <p className="text-gray-700 mb-8 leading-relaxed text-center">
              Whether you're interested in collaborating on a project, discussing AI and automation, 
              or exploring opportunities in full-stack development, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 scroll-animate opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
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

export default Contact;