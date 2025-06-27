import React, { useState } from 'react';
import { generateText } from '../utils/gemini';
import { XENTICORE_LOGO_DATA_URI } from '../constants';
import { HomeIcon } from './icons';

interface GeminiDemoProps {
  navigateToLanding?: () => void;
}

export const GeminiDemo: React.FC<GeminiDemoProps> = ({ navigateToLanding }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const result = await generateText(`You are Xentinet Core AI Assistant. 
      Respond to the following query in a futuristic, cybersecurity-focused manner: ${prompt}`);
      setResponse(result);
    } catch (err) {
      setError('Failed to get response from Gemini API');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-8 relative bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-xl shadow-lg shadow-blue-500/20">      
      {navigateToLanding && (
        <button 
          onClick={navigateToLanding} 
          className="absolute top-0 left-0 p-2 rounded-full hover:bg-gray-800/50 transition-colors"
          aria-label="Back to Home"
        >
          <HomeIcon className="w-8 h-8 text-blue-400" />
        </button>
      )}
      <div className="flex items-center mb-8">
        <img 
          src={XENTICORE_LOGO_DATA_URI} 
          alt="Xentinet Core Logo" 
          style={{
            width: '18rem',
            height: '18rem',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.9))',
            animation: 'subtle-float 6s ease-in-out infinite',
            marginRight: '1rem',
          }}
        />
        <h2 className="text-3xl font-bold text-blue-400 tracking-wider" style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.7)' }}>XENTINET CORE AI ASSISTANT</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full mb-6 mt-4">
        <div className="flex flex-col space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask Xentinet Core AI a question..."
            className="w-full p-4 bg-gray-900/80 border border-blue-500/70 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent shadow-inner shadow-blue-500/20"
            rows={4}
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
              loading || !prompt.trim() 
                ? 'bg-gray-700 cursor-not-allowed opacity-70' 
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30'
            }`}
          >
            {loading ? 'Processing...' : 'Submit'}
          </button>
        </div>
      </form>

      {error && (
        <div className="w-full p-4 mb-6 bg-red-900/30 border border-red-500 rounded-lg text-red-300 shadow-md shadow-red-500/20">
          {error}
        </div>
      )}

      {response && (
        <div className="w-full">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Response:</h3>
          <div className="p-5 bg-gray-800/50 border border-blue-500/70 rounded-lg text-white whitespace-pre-wrap shadow-inner shadow-blue-500/10 leading-relaxed">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiDemo;
