import React, { useState } from 'react';
import { ResponsiveContainer } from 'recharts';
import Card from './Card';
import TokenAllocationChart from './TokenAllocationChart';
import CountdownTimer from './CountdownTimer';
import Timeline from './Timeline';
import { ShieldIcon, TokenIcon, TimerIcon, WalletIcon, LockIcon, ZapIcon, CopyIcon, CheckIcon, HomeIcon } from './icons';
import { TOKEN_ALLOCATION_DATA, WALLETS, TIMELINE_EVENTS, XENTICORE_LOGO_DATA_URI } from '../constants';

interface TransparencyHubProps {
  navigateToLanding: () => void;
  navigateToAI: () => void;
}

const TransparencyHub: React.FC<TransparencyHubProps> = ({ navigateToLanding, navigateToAI }) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const nextUnlockDate = new Date();
  nextUnlockDate.setDate(nextUnlockDate.getDate() + 90);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <header className="text-center mb-12 relative">
        <div className="flex justify-between absolute top-0 w-full">
          <button onClick={navigateToLanding} className="p-2 rounded-full hover:bg-gray-800/50 transition-colors" aria-label="Back to Home">
            <HomeIcon className="w-8 h-8 text-blue-400" />
          </button>
          <button 
            onClick={navigateToAI} 
            className="p-2 px-4 rounded-md bg-blue-900/30 border border-cyan-700 hover:bg-blue-800/50 hover:border-cyan-400 transition-colors flex items-center gap-2"
            aria-label="AI Assistant"
          >
            <span className="text-cyan-300 font-medium">AI Assistant</span>
            <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
          </button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-500 flash-animation mx-4"
            style={{ 
              textShadow: '0 0 20px rgba(239, 68, 68, 0.9), 0 0 30px rgba(239, 68, 68, 0.7)', 
              letterSpacing: '1px',
              transform: 'rotate(-5deg)'
            }}
          >
            REAL-TIME DATA<br/>COMING SOON
          </div>
          <img
            src={XENTICORE_LOGO_DATA_URI}
            alt="Xentinet Logo"
            style={{
              position: 'relative',
              zIndex: 9999,
              display: 'inline-block',
              width: '10rem', // Doubled from 5rem
              height: '10rem', // Doubled from 5rem
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.9))',
            }}
          />
          <div 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-500 flash-animation mx-4"
            style={{ 
              textShadow: '0 0 20px rgba(239, 68, 68, 0.9), 0 0 30px rgba(239, 68, 68, 0.7)', 
              letterSpacing: '1px',
              transform: 'rotate(5deg)'
            }}
          >
            REAL-TIME DATA<br/>COMING SOON
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 animate-subtle-glow font-orbitron">XENTINET TRANSPARENCY HUB</h1>
        <p className="text-blue-400 mt-2 text-lg md:text-xl">Proof Over Promises. Defense Over Hype.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="md:col-span-2 lg:col-span-2 xl:col-span-2" icon={<TokenIcon />} title="Token Allocation">
          <p className="mb-4 text-sm text-gray-400">See exactly how $XENTI is distributed across the ecosystem. No hidden wallets. No disproportionate control.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
            {TOKEN_ALLOCATION_DATA.map(item => (
              <div key={item.name} className="flex items-center">
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.fill }}></span>
                <span>{item.name}: <strong>{item.value}%</strong></span>
              </div>
            ))}
          </div>
          <h4 className="font-bold text-blue-400 mb-2 font-orbitron">Live Token Distribution</h4>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <TokenAllocationChart data={TOKEN_ALLOCATION_DATA} />
            </ResponsiveContainer>
          </div>
        </Card>

        <Card icon={<TimerIcon />} title="Vesting Schedules">
           <p className="mb-6 text-sm text-gray-400">The team's success is tied to the project's success — by design.</p>
           <h4 className="font-bold text-blue-400 mb-2 font-orbitron">Next Unlock In</h4>
           <CountdownTimer targetDate={nextUnlockDate} />
           <button className="mt-6 w-full text-center py-2 px-4 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300">
              View Full Vesting Schedule
           </button>
        </Card>
        
        <Card icon={<ShieldIcon />} title="Autonomous Defense Log">
          <p className="mb-6 text-sm text-gray-400">Our system doesn’t just sit idle — it actively defends. Security isn't optional — it's continuous.</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg">
              <span className="font-bold text-gray-300">Threats Detected</span>
              <span className="font-orbitron text-2xl font-bold text-blue-400">12</span>
            </div>
            <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg">
              <span className="font-bold text-gray-300">Resolved</span>
              <span className="font-orbitron text-2xl font-bold text-green-400">12</span>
            </div>
            <div className="flex justify-between items-center bg-gray-900/50 p-3 rounded-lg">
              <span className="font-bold text-gray-300">Breaches</span>
              <span className="font-orbitron text-2xl font-bold text-red-500">0</span>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3 xl:col-span-2" icon={<WalletIcon />} title="Official Wallets">
          <p className="mb-4 text-sm text-gray-400">View. Verify. Track. Every major wallet address, fully public. Click to view on-chain activity in real-time.</p>
          <div className="space-y-3">
            {WALLETS.map(wallet => (
              <div key={wallet.name} className="bg-gray-900/50 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-bold text-blue-400">{wallet.name}</span>
                  <a href="#" className="block text-xs text-gray-400 font-mono truncate hover:text-blue-300 transition-colors">{wallet.address}</a>
                </div>
                <button onClick={() => handleCopy(wallet.address)} className="p-2 rounded-md hover:bg-gray-700 transition-colors">
                  {copiedAddress === wallet.address ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5 text-gray-500" />}
                </button>
              </div>
            ))}
          </div>
        </Card>

        <Card icon={<LockIcon />} title="Smart Contract Verification">
           <p className="mb-4 text-sm text-gray-400">All $XENTI smart contracts are open-source, verified, and externally audited.</p>
           <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col items-center text-center border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <CheckIcon className="w-12 h-12 text-green-400 mb-2"/>
              <h4 className="font-bold text-green-400 font-orbitron">Audit Passed</h4>
              <p className="text-sm text-gray-400">May 15, 2024</p>
           </div>
           <button className="mt-4 w-full text-center py-2 px-4 border border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 transition-all duration-300">
              View Contract Source
           </button>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3 xl:col-span-4" icon={<ZapIcon />} title="Proof-of-Action Timeline">
           <p className="mb-6 text-sm text-gray-400">Everything we've built. Everything we've committed. Tracked, timestamped, transparent.</p>
           <Timeline events={TIMELINE_EVENTS} />
        </Card>
      </main>

      <footer className="text-center mt-12 py-4 border-t border-gray-800/50">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Xentinet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TransparencyHub;