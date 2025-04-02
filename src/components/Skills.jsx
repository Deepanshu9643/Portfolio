import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,     
  });

  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Redux', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Mongoose', level: 70 },
    { name: 'REST API', level: 90 },
    { name: 'GraphQL', level: 70 },
    { name: 'JWT', level: 80 },
  ];
  
  const toolsSkills = [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 80 },
    { name: 'VS Code', level: 95 },
    { name: 'Webpack', level: 70 },
    { name: 'Docker', level: 60 },
    { name: 'Postman', level: 85 },
    { name: 'npm/yarn', level: 80 },
  ];
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/scanline.png')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400 inline-block border-b-2 border-amber-600 pb-2">
            <TerminalIcon className="inline-block mr-2" size={24} />
            ls -la ./skills/
          </h2>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000"
          style={{
            transform: inView ? 'translateY(0)' : 'translateY(50px)',
            opacity: inView ? 1 : 0,
          }}
        >
          {[{ title: "frontend.log", skills: frontendSkills }, { title: "backend.log", skills: backendSkills }, { title: "tools.log", skills: toolsSkills }].map((section, index) => (
            <div key={index} className="bg-gray-900 border-2 border-amber-600 rounded-lg p-6" style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)' }}>
              <div className="flex items-center mb-6">
                <TerminalIcon className="text-amber-400 mr-2" size={20} />
                <h3 className="text-amber-400 text-xl font-bold">{section.title}</h3>
              </div>
              
              <div className="space-y-4">
                {section.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-amber-400">{skill.name}</span>
                      <span className="text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                      <div 
                        className="bg-amber-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900 border-2 border-amber-600 rounded-lg p-6" style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)' }}>
            <h3 className="text-amber-400 text-xl font-bold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['RESTful APIs', 'Responsive Design', 'UI/UX', 'Agile', 'SCRUM', 'Testing', 'Debugging', 'Performance Optimization', 'PWA', 'Authentication', 'Authorization'].map((skill, index) => (
                <span key={index} className="bg-gray-800 text-amber-400 px-3 py-1 rounded-md border border-amber-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
