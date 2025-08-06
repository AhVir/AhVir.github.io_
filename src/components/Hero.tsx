import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'No One!',
    'AI Researcher',
    'Teaching Assistant',
  ];

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[currentIndex];
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    };

    const timeout = setTimeout(typeText, 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Sheikh Tanvir Ahmed
            {/* <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Ahmed */}
            {/* </span> */}
          </h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              <span className="font-medium">{currentText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science student passionate about NLP, Computer Vision, and Quantum Computing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/ahvir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href="https://linkedin.com/in/shkhtanvirahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            {/* <a
              href="https://ahvir.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
            >
              <ExternalLink className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a> */}
            <a
              href="mailto:shkhtanvirahmed@gmail.com"
              className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;