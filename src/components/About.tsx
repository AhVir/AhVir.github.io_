import React from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                AI Researcher & Problem Solver
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                An undergrad CS student with passion torwards NLP, LLM & Computer Vision.
                Additionally, sometimes a full-stack developer, or blockchain developer, or even an AI/ML engineer when it needed to be.
              </p>
              {/* <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Currently working as an intern at Octopi Digital Ltd, focusing on automation and R&D projects. 
                I'm passionate about creating innovative solutions that make a real-world impact.
              </p> */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll either find me solving algorithmic challenges on competitive programming platforms
                or maybe leading teams in the hackathons. I've also been actively involded in mentoring fellow students & juniors in the academia includeing programming concepts, data structures and others.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+8801643631514</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">shkhtanvirahmed@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-blue-100 leading-relaxed">
                Currently focused on conducting research in LLM and Computer Vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;