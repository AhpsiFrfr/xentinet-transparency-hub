
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import TransparencyHub from './components/TransparencyHub';
import GeminiDemo from './components/GeminiDemo';
import InfoPage from './components/InfoPage';
import AnimatedBackground from './components/AnimatedBackground';
import { NIGHT_SKY_URL } from './constants/backgroundImages';

// App component with AnimatedBackground

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'hub' | 'ai' | 'info'>('landing');

  return (
    <AnimatedBackground backgroundImage={NIGHT_SKY_URL}>
      <div className="relative min-h-screen text-gray-300 p-4 sm:p-6 lg:p-8 overflow-y-auto">
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
    </AnimatedBackground>
  );
};

export default App;
