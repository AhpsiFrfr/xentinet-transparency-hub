import React from 'react';
import { XENTICORE_LOGO_DATA_URI } from '../constants';

interface LandingPageProps {
  navigateToHub: () => void;
  navigateToAI: () => void;
  navigateToInfo: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ navigateToHub, navigateToAI, navigateToInfo }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <header className="mb-8 flex flex-col items-center">
        <img
          src={XENTICORE_LOGO_DATA_URI}
          alt="Xentinet Core Logo"
          style={{
            position: 'relative',
            zIndex: 9999,
            width: '40rem', // Dramatically increased to match screenshot
            height: '40rem', // Dramatically increased to match screenshot
            objectFit: 'contain',
            marginBottom: '-3rem', // Negative margin to bring logo closer to text
            filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.9))',
            animation: 'subtle-float 6s ease-in-out infinite',
            maxWidth: '90vw', // Ensure it doesn't overflow on smaller screens
            transform: 'translateY(1rem)', // Move the logo down slightly
          }}
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gray-100 animate-subtle-glow font-orbitron">XENTINET</h1>
        <p className="text-blue-400 mt-4 text-lg md:text-2xl">Sovereign Defense Systems</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
        <button
          onClick={navigateToInfo}
          className="px-8 py-4 font-bold text-lg font-orbitron text-gray-100 bg-blue-600/20 border-2 border-blue-500 rounded-lg hover:bg-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
          Establish Secure Connection
        </button>
        <button 
          onClick={navigateToHub}
          className="px-8 py-4 font-bold text-lg font-orbitron text-gray-300 bg-gray-800/50 border-2 border-gray-700 rounded-lg hover:bg-gray-700/70 hover:border-blue-400 hover:text-white transition-all duration-300">
          Xenti-Dox Transparency Hub
        </button>
        <button 
          onClick={navigateToAI}
          className="px-8 py-4 font-bold text-lg font-orbitron text-cyan-300 bg-blue-900/30 border-2 border-cyan-700 rounded-lg hover:bg-blue-800/50 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
          Xenti-Core AI Assistant
        </button>
      </div>

      <footer className="absolute bottom-0 text-center py-4">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Xentinet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;