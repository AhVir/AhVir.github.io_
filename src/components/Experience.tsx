import React from 'react';
import { Briefcase, Users, ClipboardCheck, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   company: 'Octopi Digital Ltd',
    //   position: 'Intern',
    //   period: 'June 2025 - Present',
    //   location: 'Dhaka, Bangladesh',
    //   type: 'Internship',
    //   icon: Building,
    //   color: 'blue',
    //   responsibilities: [
    //     'Working on automation projects and R&D initiatives',
    //     'Developing innovative solutions for business process optimization',
    //     'Collaborating with senior developers on cutting-edge technologies',
    //     'Contributing to research and development of new products'
    //   ]
    // },
    {
      company: 'United International University',
      position: 'Undergraduate Teaching Assistant',
      period: 'November 2024 - Present',
      location: 'Dhaka, Bangladesh',
      type: 'Part-time',
      icon: Users,
      color: 'indigo',
      responsibilities: [
        'Assist faculty in ensuring smooth class operations',
        'Support students with course-related issues and academic guidance',
        'Assess students based on their assignments and tasks',
        'Facilitate learning sessions and provide technical support'
      ]
    },
    {
      company: 'United International University',
      position: 'Undergraduate Grader',
      period: 'October 2023 - January 2024',
      location: 'Dhaka, Bangladesh',
      type: 'Part-time',
      icon: ClipboardCheck,
      color: 'purple',
      responsibilities: [
        'Assessing students based on their assignments and projects',
        'Providing detailed feedback on student submissions',
        'Maintaining accurate grading records and documentation',
        'Collaborating with faculty to ensure fair evaluation standards'
      ]
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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey combining academia and industry experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            const Icon = exp.icon;

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
                        {exp.position}
                      </h3>
                      <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{exp.period}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-medium text-sm shadow-lg`}>
                      {exp.type}
                    </div>
                  </div>
                </div>

                <div className={`p-6 ${colors.accent} rounded-xl`}>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colors.text} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;