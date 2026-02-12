import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Git',
    description: 'Version control system for tracking changes in source code',
    logo: '/logos/git.svg',
    link: 'https://git-scm.com/',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    logo: '/logos/nodejs.svg',
    link: 'https://nodejs.org/',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers',
    logo: '/logos/docker.svg',
    link: 'https://www.docker.com/',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'VS Code',
    description: 'Lightweight but powerful source code editor with built-in support for JavaScript',
    logo: '/logos/vscode.svg',
    link: 'https://code.visualstudio.com/',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 5,
    title: 'Windsurf',
    description: 'AI-powered IDE for modern development workflows',
    logo: '/logos/windsurf.svg',
    link: 'https://windsurf.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 6,
    title: 'Vercel',
    description: 'Platform for frontend frameworks and static sites with instant deployments',
    logo: '/logos/vercel.svg',
    link: 'https://vercel.com/',
    color: 'from-gray-900 to-black'
  },
  {
    id: 7,
    title: 'Nehru Confessions',
    description: 'Campus confessions platform for sharing anonymous thoughts and experiences',
    logo: '/logos/nehru-confessions.svg',
    link: 'https://github.com/dazzal-david/campus-confessions',
    color: 'from-pink-500 to-rose-500'
  }
];

function WorkshopCard({ workshop }) {
  return (
    <a 
      href={workshop.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl group"
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <img 
            src={workshop.logo} 
            alt={`${workshop.title} logo`} 
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:text-primary-600 transition-colors duration-300">
          {workshop.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          {workshop.description}
        </p>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold mb-2"><center>Syntista</center></h1>
            <p className="text-primary-100 text-lg">Explore our comprehensive collection of resources</p>
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Links</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">© Syntista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
