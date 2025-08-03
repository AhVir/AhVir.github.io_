import React from 'react';
import { ExternalLink, Github, Award, Calendar, Users, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'OptiTask - Personal Management System',
      period: 'January 2025',
      status: 'Completed',
      color: 'blue',
      icon: Users,
      description: 'An emotion-aware productivity app with group chat, smart task assignment, and AI-driven support using Gemini API and Stanford NLP.',
      features: [
        'ChatBot integration with Gemini API',
        'Emotion analysis using Stanford NLP',
        'Smart task assignment and automation',
        'Group chat functionality',
        'Personalized AI responses'
      ],
      technologies: ['React', 'Node.js', 'Gemini API', 'Stanford NLP', 'MongoDB'],
      achievement: '🏆 1st Place (Poster Category) - UIU Fall Project Show 2024 (150+ teams)',
      links: {
        github: 'https://github.com/AhVir/OptiTask_/',
        live: null
      }
    },
    {
      title: 'Autonomous Car Parking System',
      period: 'July 2024',
      status: 'Completed',
      color: 'indigo',
      icon: Code,
      description: 'A reinforcement learning-based self-driving car simulation in Unity deployed to real-world Arduino vehicle via custom REST APIs.',
      features: [
        'Reinforcement learning agent training',
        'Unity 3D simulation environment',
        'Custom REST API integration',
        'Real-world Arduino vehicle deployment',
        'Autonomous parking capabilities'
      ],
      technologies: ['Unity', 'Python', 'Arduino', 'REST APIs', 'Machine Learning'],
      achievement: '🥉 3rd Runner-up - UIU Project Show Summer 2024 (100+ teams)',
      links: {
        github: 'https://github.com/AhVir/Autonomous-Car-Parking/',
        live: null
      }
    },
    {
      title: 'VoteChain - Blockchain Based Voting System',
      period: 'Expected Completion: June 2025',
      status: 'Completed',
      color: 'purple',
      icon: Award,
      description: 'A decentralized voting platform with wallet authentication, real-time voting logic, and secure smart contract execution.',
      features: [
        'Decentralized voting mechanism',
        'MetaMask wallet integration',
        'Smart contract security',
        'Real-time vote tracking',
        'Transparent election process'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Solidity', 'MetaMask', 'Web3.js'],
      achievement: 'Currently in development',
      links: {
        github: 'https://github.com/AhVir/VoteChain/',
        live: null
      }
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      gradient: 'from-blue-600 to-blue-700',
      accent: 'bg-blue-50 dark:bg-blue-900/20',
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
      gradient: 'from-indigo-600 to-indigo-700',
      accent: 'bg-indigo-50 dark:bg-indigo-900/20',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      gradient: 'from-purple-600 to-purple-700',
      accent: 'bg-purple-50 dark:bg-purple-900/20',
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Award-winning university projects showcasing innovation in AI, blockchain, and automation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                    <div className={`p-4 ${colors.bg} rounded-xl`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{project.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col space-y-2">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-medium text-sm shadow-lg`}>
                      {project.status}
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.links.github}
                        className={`p-2 ${colors.bg} rounded-lg hover:${colors.accent} transition-colors duration-200`}
                        title="View Source Code"
                      >
                        <Github className={`w-5 h-5 ${colors.text}`} />
                      </a>
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          className={`p-2 ${colors.bg} rounded-lg hover:${colors.accent} transition-colors duration-200`}
                          title="View Live Demo"
                        >
                          <ExternalLink className={`w-5 h-5 ${colors.text}`} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className={`p-6 ${colors.accent} rounded-xl`}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${colors.text} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`p-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl`}>
                      <h4 className="font-semibold mb-2">Achievement:</h4>
                      <p className="text-sm text-blue-100">
                        {project.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;