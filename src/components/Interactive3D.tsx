import React, { useEffect, useRef, useState } from 'react';

const Interactive3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out',
            animationDelay: '0s',
          }}
        />
        
        <div 
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * -10}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s',
          }}
        />

        <div 
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full animate-float"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -25}px) rotateZ(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s',
          }}
        />

        {/* Code symbols floating */}
        <div 
          className="absolute top-1/3 right-1/2 text-6xl font-mono text-blue-400/10 dark:text-blue-300/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px) rotateY(${mousePosition.x * 10}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '0.5s',
          }}
        >
          {'</>'}
        </div>

        <div 
          className="absolute bottom-1/3 left-1/3 text-4xl font-mono text-indigo-400/10 dark:text-indigo-300/10 animate-float"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 30}px) rotateX(${mousePosition.y * 10}deg)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1.5s',
          }}
        >
          {'{}'}
        </div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-30 animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}

      {/* Interactive mesh background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-blue-400 dark:text-blue-300" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-400/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '1s',
          }}
        />
      </div>
    </div>
  );
};

export default Interactive3D;