// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// ---------------- For Reconstruct ----------
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail } from 'lucide-react';
import "./index.css";

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0f0f0f',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'monospace',
      }}
    >
      <div>
        🚧 Website's too cool to load... <br />
        &gt; status: under_reconstruction
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/ahvir"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
        >
          <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
        </a>
        <a
          href="https://linkedin.com/in/shkhtanvirahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
        >
          <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
        </a>
        <a
          href="mailto:shkhtanvirahmed@gmail.com"
          className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 group"
        >
          <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </a>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);