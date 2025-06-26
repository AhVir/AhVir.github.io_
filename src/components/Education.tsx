import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'United International University',
      degree: 'Bachelor of Computer Science and Engineering',
      period: 'Expected 2026',
      grade: 'CGPA: 3.99/4.0 (Ongoing)',
      location: 'Dhaka, Bangladesh',
      icon: GraduationCap,
      color: 'blue',
      coursework: [
        'Data Structure & Algorithms',
        'Artificial Intelligence',
        'Machine Learning',
        'System Analysis And Design',
        'Database Management System',
        'Web Programming',
        'Software Engineering'
      ]
    },
    {
      institution: 'Dhaka College',
      degree: 'Higher Secondary Certificate',
      period: '2018 - 2020',
      grade: 'Grade: 5.00 (A+)',
      location: 'Dhaka, Bangladesh',
      icon: BookOpen,
      color: 'indigo',
    },
    {
      institution: 'Faridpur Zilla School',
      degree: 'Secondary School Certificate',
      period: '2018',
      grade: 'Grade: 5.00 (A+)',
      location: 'Faridpur, Bangladesh',
      icon: Award,
      color: 'purple',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-200 dark:border-blue-800',
      gradient: 'from-blue-600 to-blue-700',
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'border-indigo-200 dark:border-indigo-800',
      gradient: 'from-indigo-600 to-indigo-700',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800',
      gradient: 'from-purple-600 to-purple-700',
    },
  };

  return (
    <section id="education" className="py-20 px-4 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic excellence with a focus on cutting-edge computer science concepts
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const colors = colorClasses[edu.color as keyof typeof colorClasses];
            const Icon = edu.icon;
            
            return (
              <div
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                    <div className={`p-4 ${colors.bg} rounded-xl`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{edu.period}</span>
                        <span className="hidden sm:block">•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-bold text-lg shadow-lg`}>
                      {edu.grade}
                    </div>
                  </div>
                </div>

                {edu.coursework && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Relevant Coursework:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className={`px-4 py-2 ${colors.bg} ${colors.border} border rounded-lg text-sm font-medium ${colors.text} text-center hover:shadow-md transition-shadow duration-200`}
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;