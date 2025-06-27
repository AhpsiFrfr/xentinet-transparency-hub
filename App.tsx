
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import TransparencyHub from './components/TransparencyHub';
import GeminiDemo from './components/GeminiDemo';
import InfoPage from './components/InfoPage';

const DataStreamBackground: React.FC = () => (
  <div className="data-stream-container">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="data-stream-line"
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${10 + Math.random() * 20}s`,
          animationDelay: `${Math.random() * -20}s`,
        }}
      />
    ))}
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'hub' | 'ai' | 'info'>('landing');

  return (
    <div className="relative min-h-screen bg-black text-gray-300 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <DataStreamBackground />
      <div className="relative z-10">
        {view === 'landing' ? (
          <LandingPage 
            navigateToHub={() => setView('hub')} 
            navigateToAI={() => setView('ai')}
            navigateToInfo={() => setView('info')}
          />
        ) : view === 'hub' ? (
          <TransparencyHub 
            navigateToLanding={() => setView('landing')} 
            navigateToAI={() => setView('ai')} 
          />
        ) : view === 'ai' ? (
          <GeminiDemo navigateToLanding={() => setView('landing')} />
        ) : (
          <InfoPage navigateToLanding={() => setView('landing')} />
        )}
      </div>
    </div>
  );
};

export default App;
