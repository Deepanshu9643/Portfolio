import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Terminal as TerminalIcon, User, Mail, MapPin, Calendar, Code } from 'lucide-react';

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/scanline.png')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Section */}
          <div className="md:w-1/3">
  <div 
    className="sticky top-20 bg-gray-900 border-2 border-amber-600 rounded-lg p-6 transform transition-all duration-1000 shadow-lg"
    style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}
  >
    <div className="flex items-center mb-4">
      <TerminalIcon className="text-amber-400 mr-2" size={20} />
      <h3 className="text-amber-400 text-lg font-bold">user_profile.txt</h3>
    </div>

    {/* Profile Image - Bigger and No Border */}
    <div className="mb-6 relative overflow-hidden rounded-lg">
      <img 
        src="/IMG_20240518_234959.jpg"  
        alt="Developer Profile"  
        className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover"
      />
      {/* Gradient & Scanline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-black opacity-40"></div>
      <div className="absolute inset-0 bg-[url('/scanline.png')] bg-repeat opacity-10"></div>
    </div>

    {/* User Info - Centered and Clean */}
    <div className="space-y-3 text-amber-400 text-center">
      <div className="flex items-center justify-center"><User className="mr-2" size={16} /><span>MERN Stack Developer</span></div>
      <div className="flex items-center justify-center"><Mail className="mr-2" size={16} /><span>Deepanshukhorwal7@gmail.com</span></div>
      <div className="flex items-center justify-center"><MapPin className="mr-2" size={16} /><span>Delhi, India</span></div>
      <div className="flex items-center justify-center"><Calendar className="mr-2" size={16} /><span>Available for hire</span></div>
      <div className="flex items-center justify-center"><Code className="mr-2" size={16} /><span>Fresher</span></div>
    </div>
  </div>
</div>



          {/* About Me Section */}
          <div 
            ref={ref}
            className="md:w-2/3 bg-gray-900 border-2 border-amber-600 rounded-lg p-6 transform transition-all duration-1000"
            style={{
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)',
              transform: inView ? 'translateX(0)' : 'translateX(50px)',
              opacity: inView ? 1 : 0,
            }}
          >
            <div className="flex items-center mb-6">
              <TerminalIcon className="text-amber-400 mr-2" size={20} />
              <h2 className="text-amber-400 text-2xl font-bold">cat about_me.txt</h2>
            </div>

            <div className="space-y-6 text-amber-400">
              {[
                { title: "$ whoami", content: "I'm a passionate MERN stack developer with a strong foundation in building modern web applications. My journey in web development started with a curiosity about how websites work, which led me to dive deep into JavaScript and its ecosystem." },
                { title: "$ cat background.txt", content: "Coming from a commerce background, I've always been fascinated by technology and problem-solving. My passion for web development led me to dive deep into coding, where I honed my skills in building efficient, scalable, and user-friendly applications. I'm particularly interested in developing full-stack solutions that create real value for users." },
                { title: "$ cat interests.txt", content: "Beyond coding, I'm passionate about open-source contributions, staying updated with the latest tech trends, and participating in developer communities. When I'm not in front of my computer, you can find me hiking or watching sci-fi movies." },
                { title: "$ cat goals.txt", content: "My goal is to continue growing as a developer by taking on challenging projects that push my boundaries. I'm eager to collaborate with like-minded professionals and contribute to innovative solutions that make a positive impact." }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2 border-b border-amber-600 pb-1">{section.title}</h3>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
