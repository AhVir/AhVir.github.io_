import React from 'react';
import { Code, Database, Cpu, Globe, Blocks, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: ['C', 'C++', 'Go', 'Python', 'Java', 'MASM', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Web & Full Stack',
      icon: Globe,
      color: 'indigo',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'HTML', 'CSS', 'Figma']
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'purple',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs']
    },
    {
      title: 'Blockchain & Web3',
      icon: Blocks,
      color: 'teal',
      skills: ['Solidity', 'MetaMask', 'Web3.js', 'Smart Contracts', 'DeFi', 'NFTs']
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      color: 'green',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Core Concepts',
      icon: Cpu,
      color: 'orange',
      skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'API Integration', 'CRM Logic', 'Automation']
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      gradient: 'from-blue-600 to-blue-700',
      hover: 'hover:bg-blue-200 dark:hover:bg-blue-800/50',
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
      gradient: 'from-indigo-600 to-indigo-700',
      hover: 'hover:bg-indigo-200 dark:hover:bg-indigo-800/50',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      gradient: 'from-purple-600 to-purple-700',
      hover: 'hover:bg-purple-200 dark:hover:bg-purple-800/50',
    },
    teal: {
      bg: 'bg-teal-100 dark:bg-teal-900/30',
      text: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-800',
      gradient: 'from-teal-600 to-teal-700',
      hover: 'hover:bg-teal-200 dark:hover:bg-teal-800/50',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800',
      gradient: 'from-green-600 to-green-700',
      hover: 'hover:bg-green-200 dark:hover:bg-green-800/50',
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-200 dark:border-orange-800',
      gradient: 'from-orange-600 to-orange-700',
      hover: 'hover:bg-orange-200 dark:hover:bg-orange-800/50',
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-4 py-3 ${colors.bg} ${colors.border} border rounded-lg text-center font-medium ${colors.text} ${colors.hover} transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Competitive Programming</h3>
            <p className="text-blue-100 leading-relaxed mb-4">
              Solved 500+ problems across platforms like Codeforces, LeetCode, and AtCoder.
              Passionate about algorithmic problem solving and optimization techniques.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-blue-200 text-sm">Platforms</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Bengali</span>
                  <span className="text-purple-200">Native</span>
                </div>
                <div className="w-full bg-purple-700/50 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">English</span>
                  <span className="text-purple-200">Fluent</span>
                </div>
                <div className="w-full bg-purple-700/50 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;