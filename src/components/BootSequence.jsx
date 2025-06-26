import React, { useEffect, useState } from 'react';

export const BootSequence = ({ progress = 0 }) => {
  const [bootMessages, setBootMessages] = useState([]);

  useEffect(() => {
    const messages = [
      "Initializing system...",
      "Loading kernel...",
      "Mounting file systems...",
      "Checking hardware compatibility...",
      "Loading drivers...",
      "Starting network services...",
      "Initializing GUI...",
      "Loading portfolio data...",
      "System ready."
    ];

    const messageInterval = setInterval(() => {
      setBootMessages(prev => {
        if (prev.length >= messages.length) {
          clearInterval(messageInterval);
          return prev;
        }
        return [...prev, messages[prev.length]];
      });
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-mono">
      <div className="w-full max-w-3xl">
        <div className="mb-8 text-amber-400">
          <pre className="text-xs sm:text-sm md:text-base">
{`
                                                                                
 7MM"""Yp,   .g8""8q.  7MN.    7MF'      7MMF' .g8""8q.  7MMF'    7MF' 7MM"""Mq.      
  MM    Yb .dP'     YM. MMN.    M         MM .dP'     YM. MM       M    MM    MM.     
  MM    dP dM'       MM M YMb   M         MM dM'       MM MM       M    MM   ,M9      
  MM"""bg. MM        MM M   MN. M         MM MM        MM MM       M    MMmmdM9       
  MM     Y MM.      ,MP M    MM.M         MM MM.      ,MP MM       M    MM  YM.       
  MM    ,9  Mb.    ,dP' M     YMM (O)     MM  Mb.    ,dP' YM.     ,M    MM    Mb.     
.JMMmmmd9     "bmmd"' .JML.    YM  Ymmm999Y     "bmmd"'     bmmmmd"'  .JMML. .JMM.    

`}
          </pre>
          <p className="text-sm sm:text-base mb-4">BIOS Version 1.0.0</p>
          <p className="text-sm sm:text-base mb-4">Portfolio OS v1.0 Loading...</p>
        </div>

        {/* Boot Messages */}
        <div className="mb-6 text-amber-400 text-sm sm:text-base">
          {bootMessages.map((message, index) => (
            <div key={index} className="flex">
              <span className="mr-2">[{index.toString().padStart(2, '0')}]</span>
              <span>{message}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-800 rounded-full h-2.5">
            <div 
              className="bg-amber-400 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-amber-400 mt-1">
            <span>0%</span>
            <span>{progress}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-amber-400 text-sm">
          <p>Press F2 to enter setup</p>
          <p className="animate-pulse">System will start automatically...</p>
        </div>
      </div>
    </div>
  );
};















// import React, { useEffect, useState } from 'react';

// export const BootSequence = ({ progress = 0 }) => {
//   const [bootMessages, setBootMessages] = useState([]);

//   useEffect(() => {
//     const messages = [
//       "Initializing system...",
//       "Loading kernel...",
//       "Mounting file systems...",
//       "Checking hardware compatibility...",
//       "Loading drivers...",
//       "Starting network services...",
//       "Initializing GUI...",
//       "Loading portfolio data...",
//       "System ready."
//     ];

//     const messageInterval = setInterval(() => {
//       setBootMessages(prev => {
//         if (prev.length >= messages.length) {
//           clearInterval(messageInterval);
//           return prev;
//         }
//         return [...prev, messages[prev.length]];
//       });
//     }, 500);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-2 font-mono">
//       <div className="w-full max-w-md">
        
//         {/* ASCII Art (Smaller) */}
//         <div className="mb-3 text-amber-400 overflow-auto max-h-[20vh] leading-none">
//           <pre className="text-[6px] sm:text-[8px] md:text-[10px]">
// {`
//  7MM"""Yp,   .g8""8q.  7MN.    7MF'      7MMF' .g8""8q.  7MMF'    7MF' 7MM"""Mq.      
//   MM    Yb .dP'     YM. MMN.    M         MM .dP'     YM. MM       M    MM    MM.     
//   MM    dP dM'       MM M YMb   M         MM dM'       MM MM       M    MM   ,M9      
//   MM"""bg. MM        MM M   MN. M         MM MM        MM MM       M    MMmmdM9       
//   MM     Y MM.      ,MP M    MM.M         MM MM.      ,MP MM       M    MM  YM.       
//   MM    ,9  Mb.    ,dP' M     YMM (O)     MM  Mb.    ,dP' YM.     ,M    MM    Mb.     
// .JMMmmmd9     "bmmd"' .JML.    YM  Ymmm999Y     "bmmd"'     bmmmmd"'  .JMML. .JMM.    
// `}
//           </pre>
//           <p className="text-[8px] sm:text-[10px] mb-1">BIOS Version 1.0.0</p>
//           <p className="text-[8px] sm:text-[10px] mb-3">Portfolio OS v1.0 Loading...</p>
//         </div>

//         {/* Boot Messages */}
//         <div className="mb-3 text-amber-400 text-[10px] sm:text-xs max-h-[25vh] overflow-y-auto">
//           {bootMessages.map((message, index) => (
//             <div key={index} className="flex">
//               <span className="mr-2">[{index.toString().padStart(2, '0')}]</span>
//               <span>{message}</span>
//             </div>
//           ))}
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-3">
//           <div className="w-full bg-gray-800 rounded-full h-1.5">
//             <div 
//               className="bg-amber-400 h-1.5 rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <div className="flex justify-between text-[10px] text-amber-400 mt-1">
//             <span>0%</span>
//             <span>{progress}%</span>
//             <span>100%</span>
//           </div>
//         </div>

//         {/* Final Message */}
//         <div className="text-amber-400 text-[10px] sm:text-xs">
//           <p>Press F2 to enter setup</p>
//           <p className="animate-pulse">System will start automatically...</p>
//         </div>
//       </div>
//     </div>
//   );
// };
