import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Terminal as TerminalIcon, Github, ExternalLink, Code, Folder } from 'lucide-react';

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,     
  });

  const projects = [
    {
      title: "Real-Time Chat App",
      description: "A full-stack MERN chat application with real-time messaging, user authentication, and socket.io integration.",
      image: "/ProjectPic.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io"],
      github: "https://github.com/Deepanshu9643/ChatApp.git",
      demo: "https://chatapp-a42o.onrender.com",
      status: "Live"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates, task assignment, and progress tracking.",
      image: "/project2.jpg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
      status: "Coming Soon"
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard that aggregates and displays social media metrics and engagement statistics.",
      image: "/project3.jpg",
      tags: ["React", "Chart.js", "Express", "REST API"],
      github: "#",
      demo: "#",
      status: "Coming Soon"
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating, editing, and publishing blog posts with user comments.",
      image: "/project4.jpg",
      tags: ["React", "Node.js", "MongoDB", "Markdown"],
      github: "#",
      demo: "#",
      status: "Coming Soon"
    }
  ];
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/scanline.png')] bg-repeat opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400 inline-block border-b-2 border-amber-600 pb-2">
            <TerminalIcon className="inline-block mr-2" size={24} />
            cd ./projects && ls
          </h2>
        </div>
        
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000"
          style={{
            transform: inView ? 'translateY(0)' : 'translateY(50px)',
            opacity: inView ? 1 : 0,
          }}
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 border-2 border-amber-600 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105"
              style={{ 
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)',
                animation: `fadeInUp 0.5s ease-in-out ${index * 0.2}s`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-amber-400">
                  <Folder size={64} />
                </div>
                <div className="absolute inset-0 bg-[url('/scanline.png')] bg-repeat opacity-20"></div>
                <div className="absolute top-0 left-0 right-0 bg-gray-900 text-amber-400 p-2 flex items-center">
                  <TerminalIcon className="mr-2" size={16} />
                  <span className="text-sm">{project.title}.project</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-amber-600 text-black p-1 text-center font-bold">
                  {project.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-400 mb-2">{project.title}</h3>
                <p className="text-amber-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-800 text-amber-400 px-2 py-1 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a href={project.github} className="text-amber-400 hover:text-amber-300 flex items-center">
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="text-amber-400 hover:text-amber-300 flex items-center">
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-900 border-2 border-amber-600 rounded-lg p-6" style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)' }}>
            <h3 className="text-amber-400 text-xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-amber-300 mb-4">
              I'm constantly working on new projects. Check back soon for updates!
            </p>
            <div className="flex justify-center">
              <Code className="text-amber-400 animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
