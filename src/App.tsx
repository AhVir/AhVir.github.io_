import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Interactive3D from './components/Interactive3D';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 transition-colors duration-500">
        <Interactive3D />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Activities />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;