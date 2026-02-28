import React from 'react';
import { workshops } from './workshops';

function WorkshopCard({ workshop }) {
  return (
    <a
      href={workshop.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card glass-panel p-8 flex flex-col items-center justify-center text-center group h-full"
    >
      {/* Background glowing gradient layer inside card */}
      <div className={`absolute inset-0 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>

      {/* Blurred glowing aura outside card on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 rounded-2xl -z-10`}></div>

      <div className="relative z-10 flex flex-col items-center flex-grow">
        <div className={`w-20 h-20 mb-6 rounded-2xl bg-slate-800/60 flex items-center justify-center p-4 border border-slate-700/50 group-hover:border-slate-500/50 transition-colors duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
          <img
            src={workshop.logo}
            alt={`${workshop.title} logo`}
            className="w-full h-full object-contain filter drop-shadow-lg z-10"
          />
        </div>
        <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors duration-300 tracking-tight">
          {workshop.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mt-auto">
          {workshop.description}
        </p>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="relative z-10 pt-24 pb-16 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-block relative">
          <div className="absolute -inset-4 bg-primary-500/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
          <h1 className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight mb-6 pb-2 text-glow">
            Syntista
          </h1>
        </div>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our comprehensive collection of resources and premium developer tools.
        </p>
      </div>
    </header>
  );
}

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/20 blob" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-600/20 blob opacity-20" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-blue-600/20 blob opacity-20" style={{ animationDelay: '4s' }}></div>

      {/* Optional grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MCAwaC0xTTEwIDBoLTFNMjAgMGgtMU0zMCAwaC0xTTQwIDEwaC0xTTEwIDEwaC0xTTIwIDEwaC0xTTMwIDEwaC0xTTQwPTIwaC0xTTEwIDIwaC0xTTIwIDIwaC0xTTMwIDIwaC0xTTQwIDMwaC0xTTEwIDMwaC0xTTIwIDMwaC0xTTMwIDMwaC0xTTQwIDQwaC0xTTEwIDQwaC0xTTIwIDQwaC0xTTMwIDQwaC0xTTAgMHYxTTAgMTB2MU0wPTIwdjFNMCAzMHYxTTAgNDB2MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-primary-500/30 font-sans">
      <BackgroundEffects />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </main>

        <footer className="relative z-10 py-8 border-t border-slate-800/50 bg-slate-900/40 backdrop-blur-md mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-500 text-sm font-medium tracking-wide">
              © {new Date().getFullYear()} Syntista. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
