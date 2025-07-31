import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities in AI, blockchain, and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a
                      href="mailto:shkhtanvirahmed@gmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      shkhtanvirahmed@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a
                      href="tel:+8801643631514"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      +8801643631514
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Whether you're interested in collaborating on innovative projects, discussing AI/ML research,
                or exploring opportunities in blockchain development, I'd love to hear from you!
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/shkhtanvirahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/shkhtanvirahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://ahvir.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="Personal Website"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/20">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © 2025 Sheikh Tanvir Ahmed.
            </p>
            {/* <p className="text-sm text-gray-500 dark:text-gray-500">
              Designed and developed with ❤️ for the tech community
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;