import React from 'react';
import { BookOpen, ExternalLink, GitBranch, Server, Container, Code2, Wind, Cloud } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Git',
    description: 'Version control system for tracking changes in source code',
    icon: GitBranch,
    link: 'https://git-scm.com/',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 2,
    title: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    icon: Server,
    link: 'https://nodejs.org/',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers',
    icon: Container,
    link: 'https://www.docker.com/',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'VS Code',
    description: 'Lightweight but powerful source code editor with built-in support for JavaScript',
    icon: Code2,
    link: 'https://code.visualstudio.com/',
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 5,
    title: 'Windsurf',
    description: 'AI-powered IDE for modern development workflows',
    icon: Wind,
    link: 'https://www.anthropic.com/windsurf',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 6,
    title: 'Vercel',
    description: 'Platform for frontend frameworks and static sites with instant deployments',
    icon: Cloud,
    link: 'https://vercel.com/',
    color: 'from-gray-900 to-black'
  }
];

function WorkshopCard({ workshop }) {
  const Icon = workshop.icon;
  
  return (
    <a 
      href={workshop.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary-200 group"
    >
      <div className={`h-2 bg-gradient-to-r ${workshop.color}`}></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${workshop.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
            <Icon className={`w-6 h-6 bg-gradient-to-r ${workshop.color} bg-clip-text text-transparent`} />
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
          {workshop.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
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
          <BookOpen className="w-10 h-10 mr-4" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Technical Workshop Documentation</h1>
            <p className="text-primary-100 text-lg">Explore our comprehensive collection of technical workshops and resources</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Topics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of technical workshops. Each topic includes comprehensive documentation and external resources to enhance your learning experience.
          </p>
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
            <p className="text-gray-400">© 2024 Technical Workshop Documentation. Built with React and TailwindCSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
