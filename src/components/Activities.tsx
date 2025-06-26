import React from 'react';
import { Trophy, Users, BookOpen, Lightbulb, Target, Star } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: 'Competitive Programming',
      icon: Target,
      color: 'blue',
      description: 'Solved 500+ problems on platforms like Codeforces, LeetCode, and AtCoder. Passionate about algorithmic problem solving and optimization techniques.',
      highlights: ['500+ Problems Solved', 'Multiple Platforms', 'Algorithmic Thinking']
    },
    {
      title: 'Programming Contest Participation',
      icon: Trophy,
      color: 'indigo',
      description: 'Represented UIU in the CSE Fest 2025 Inter-University Programming Contest (IUPC), competing against top universities.',
      highlights: ['Inter-University Contest', 'Team Representation', 'Problem Solving Under Pressure']
    },
    {
      title: 'Student Mentoring',
      icon: Users,
      color: 'purple',
      description: 'Mentor junior students on core CS topics, including DSA, algorithms, and machine learning concepts.',
      highlights: ['CS Fundamentals', 'Algorithm Design', 'ML Concepts']
    },
    {
      title: 'AI/ML Research',
      icon: Lightbulb,
      color: 'teal',
      description: 'Active in research on Large Language Models (LLMs) and deep learning, exploring their application in automation and AI tools.',
      highlights: ['LLM Research', 'Deep Learning', 'Automation Applications']
    },
    {
      title: 'AI Systems Development',
      icon: BookOpen,
      color: 'green',
      description: 'Enthusiast of real-world AI, NLP, and deep learning systems. Regularly experiments with projects involving GPT, Gemini, and Stanford NLP.',
      highlights: ['GPT Integration', 'Gemini API', 'Stanford NLP']
    }
  ];

  const awards = [
    {
      title: 'Talentpool Scholarship',
      description: 'Based on outstanding board examination results',
      icon: Star,
      color: 'yellow'
    },
    {
      title: '8x Result-Based Scholarships',
      description: 'From United International University for academic excellence',
      icon: Trophy,
      color: 'blue'
    },
    {
      title: '3rd Runner-Up - UIU CSE Project Show',
      description: 'Summer 2024 - Autonomous Car Parking System (100+ teams)',
      icon: Trophy,
      color: 'orange'
    },
    {
      title: 'Champion - Poster Category',
      description: 'UIU CSE Project Show Fall 2024 - Personal Management System (150+ teams)',
      icon: Trophy,
      color: 'gold'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
    indigo: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-600 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-800' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
    yellow: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-600 dark:text-yellow-400', border: 'border-yellow-200 dark:border-yellow-800' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
    gold: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800' },
  };

  return (
    <section id="activities" className="py-20 px-4 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Activities & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beyond academics: leadership, research, and recognition in the tech community
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Activities & Involvement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const colors = colorClasses[activity.color as keyof typeof colorClasses];
              const Icon = activity.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 ${colors.bg} rounded-xl`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {activity.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2">
                    {activity.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className={`px-3 py-1 ${colors.bg} ${colors.border} border rounded-lg text-sm font-medium ${colors.text} text-center`}
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const colors = colorClasses[award.color as keyof typeof colorClasses];
              const Icon = award.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-slate-700/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${colors.bg} rounded-xl flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {award.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;