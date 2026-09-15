import React, { useState, useEffect } from 'react';
import { workshops } from './workshops';
import { Sun, Moon, ArrowRight } from 'lucide-react';

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors text-zinc-600 dark:text-zinc-400"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function WorkshopCard({ workshop }) {
  return (
    <a
      href={workshop.link}
      target="_blank"
      rel="noopener noreferrer"
      className="minimal-card p-6 md:p-8 flex flex-col group h-full"
    >
      <div className="flex items-center space-x-4 mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center p-2.5 border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-900/50 shadow-sm shrink-0">
          <img
            src={workshop.logo}
            alt={`${workshop.title} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {workshop.title}
        </h3>
      </div>
      
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
        {workshop.description}
      </p>

      <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-300">
        Explore <ArrowRight className="ml-1.5 w-4 h-4" />
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="pt-16 pb-12 md:pt-24 md:pb-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 p-1.5 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm bg-white dark:bg-zinc-900/50 inline-flex">
          <img
            src="/Intellect.png"
            alt="Intellect Studio Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
          Intellect Studio
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Explore our comprehensive collection of resources and premium developer tools.
        </p>
      </div>
    </header>
  );
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900/50 dark:selection:text-blue-100">
      <nav className="w-full p-4 flex justify-end max-w-7xl mx-auto">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </nav>

      <main className="flex-grow container mx-auto px-4 max-w-5xl mb-24">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </main>

      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            © {new Date().getFullYear()} Intellect Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
