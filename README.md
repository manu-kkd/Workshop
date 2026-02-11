# Technical Workshop Documentation

A professional React application for providing documentation and links for technical workshops.

## Features

- **Modern Design**: Clean and professional interface using TailwindCSS
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Cards**: Hover effects and smooth transitions on workshop cards
- **External Links**: Direct access to workshop resources and documentation
- **Icon Integration**: Beautiful icons using Lucide React

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
workshop-docs/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and TailwindCSS
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # TailwindCSS configuration
└── vite.config.js       # Vite build configuration
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Customization

To add new workshops:

1. Open `src/App.jsx`
2. Add a new object to the `workshops` array with the following structure:
   ```javascript
   {
     id: unique_id,
     title: 'Workshop Title',
     description: 'Brief description of the workshop',
     icon: IconComponent,
     link: 'https://example.com',
     color: 'from-color-500 to-color-500'
   }
   ```

## License

This project is open source and available under the [MIT License](LICENSE).
