import React, { useState } from 'react';
import Card from './Card';
import { HomeIcon, CopyIcon, CheckIcon, ShieldIcon, ZapIcon } from './icons';
// Import logo if needed for future use
import { XENTICORE_LOGO_DATA_URI } from '../constants';

interface InfoPageProps {
  navigateToLanding: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ navigateToLanding }) => {
    const ca = "CjZ74SVHFcyUB2kMDy9bfqY5GdPYSC4PfxyxsGYEpump";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const xentinetFeatures = [
        { feature: 'Xentinexuls Defense Protocols', description: 'AI-driven, quantum-aware threat detection and fraud prevention for blockchain, DeFi, and digital infrastructure.' },
        { feature: 'Autonomous Threat Response', description: 'Self-adapting security that neutralizes attacks in real-time without human intervention.' },
        { feature: 'Quantum-Aware Architecture', description: 'Anticipates and defends against both classical and emerging quantum computing threats.' },
        { feature: 'Mass-Utility Token System', description: 'The first token with real transactional, platform, identity, and security utility, built for Web4.' },
        { feature: 'Sovereign Identity Layer', description: 'User-owned, AI-protected digital identities (via Xentispace\'s Xent-iD Nova) integrated directly into the network.' },
        { feature: 'Forensic Intelligence', description: 'Xentinexuls provides advanced blockchain forensics for threat attribution, scam reversal, and real-time fraud monitoring.' },
        { feature: 'Seamless Web4 Migration', description: 'Infrastructure designed for frictionless, secure transition from Web2/Web3 to fully sovereign, decentralized Web4 experiences.' },
    ];
    
    const ecosystemUtilities = [
        { name: 'Xentinexuls', description: 'The AI-powered, quantum-aware security protocol actively defending the entire Xentinet network and blockchain infrastructure in real-time.' },
        { name: 'Xentispace', description: 'Customizable, token-gated digital spaces replacing outdated, insecure platforms like Discord, with built-in AI defense and evolving digital identities through Xent-iD Nova.' },
        { name: 'First To Evolve (F2E)', description: "Guidelings, Shiplings, and the shared planet ecosystem — a community-driven, evolving digital experience redefining NFTs, identity, and token utility for Web4." },
        { name: 'CEO2GO', description: 'A suite of secure, on-the-go tools for project leaders, including instant identity verification, token analytics, emergency comms, and mobile threat alerts — all secured by Xentinexuls.' },
        { name: 'Verisly', description: 'Protect your project and its users with on-demand identity, token, and community space verification powered by Xentinet protocols. Say goodbye to fake groups, phishing scams, and impersonators.' },
        { name: 'Xentibait', description: 'A proactive, ethical decoy system deployed within the ecosystem to attract, detect, and neutralize scammers before they can exploit real users or communities.' },
        { name: 'Xenti-Dox', description: 'Empower users to report, verify, and expose malicious actors, scammers, and bad-faith projects — with forensic-grade evidence collection, all secured by Xentinexuls.' },
    ];

    const additionalCapabilities = [
        { title: 'Forensic Recovery Tools', description: 'Ethical tools to trace, block, and recover stolen assets. Integrated wallet scanning and scam detection for users.' },
        { title: 'Transparency as a Service', description: 'Optional tools for projects to integrate Xentinet\'s audit, verification, and fraud prevention into their own platforms.' },
        { title: 'Real-Time Security Dashboard', description: 'Users can view active threat mitigations, network health, and key system metrics.' },
        { title: 'Quantum Threat Monitoring', description: 'Early detection system monitoring advances in quantum computing that could threaten blockchain security.' },
    ];

    return (
        <div className="max-w-7xl mx-auto">
             <header className="text-center mb-12 relative">
                <button onClick={navigateToLanding} className="absolute top-0 left-0 p-2 rounded-full hover:bg-gray-800/50 transition-colors" aria-label="Back to Home">
                    <HomeIcon className="w-8 h-8 text-blue-400" />
                </button>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-100 animate-subtle-glow">XENTINET INFORMATION HUB</h1>
                <p className="text-blue-400 mt-2 text-lg md:text-xl">The Intelligent Backbone of Web4</p>
            </header>

            <main className="space-y-8">
                <Card title="Live Build & Contract Address" icon={<ZapIcon />}>
                    <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left flex-grow">
                            <a href="https://pump.fun/coin/CjZ74SVHFcyUB2kMDy9bfqY5GdPYSC4PfxyxsGYEpump" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors">
                                PUMP.FUN LIVE BUILD STREAM
                            </a>
                            <p className="font-mono text-sm text-gray-400 mt-1 break-all">{ca}</p>
                        </div>
                        <button onClick={handleCopy} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 font-bold text-gray-200 bg-blue-600/30 border border-blue-500 rounded-lg hover:bg-blue-500/50 transition-all duration-300">
                            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5" />}
                            {copied ? 'Copied!' : 'Copy CA'}
                        </button>
                    </div>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card title="Xentinet: The Intelligent Backbone" icon={<ShieldIcon />}>
                        <p className="italic text-blue-300 mb-4">"Where Quantum-Aware Security, AI Defense, and True User Sovereignty Converge."</p>
                        <p className="text-gray-400 mb-4">Xentinet is not just infrastructure — it is the intelligent, autonomous, and evolutionary defense grid for the next era of the internet: Web4.</p>
                        <div className="space-y-3">
                            {xentinetFeatures.map(item => (
                                <div key={item.feature} className="p-3 bg-black/30 rounded-lg border-l-4 border-blue-500">
                                    <h4 className="font-bold text-gray-200">{item.feature}</h4>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card title="Xentispace: Secure Digital Realms" icon={<HomeIcon />}>
                         <p className="italic text-blue-300 mb-4">"Custom-Built. AI-Protected. Fully Owned."</p>
                         <p className="text-gray-400 mb-4">Xentispace is the front-end ecosystem where communities, projects, and users claim, build, and interact within sovereign, token-gated digital spaces.</p>
                         <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-gray-200 text-lg mb-2">Xent-iD Nova — Sovereign Digital Identity</h4>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm pl-2">
                                    <li>Evolutionary, holographic digital IDs</li>
                                    <li>XP, badges, titles, & customizable avatars</li>
                                    <li>Integrated wallet and token linkage</li>
                                    <li>Visual Holo-Sphere & social tools</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-200 text-lg mb-2">Community Space Features</h4>
                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm pl-2">
                                    <li>Token-gated entry & ownership</li>
                                    <li>AI-powered moderation & defense</li>
                                    <li>Real-time governance tools</li>
                                    <li>Custom branding, staking & rewards</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <Card title="Ecosystem Utilities & Interactive Roadmap" icon={<ZapIcon/>}>
                    <p className="text-gray-400 mb-6 text-center">Xentinet is an entire suite of intelligent, autonomous tools designed to secure, empower, and evolve the digital world. Explore our ecosystem.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ecosystemUtilities.map(util => (
                            <div key={util.name} className="bg-gray-900/70 border border-blue-500/20 rounded-xl p-6 h-full flex flex-col relative backdrop-blur-sm shadow-lg shadow-blue-900/10 transition-all duration-300 hover:border-blue-400 hover:shadow-blue-500/20 hover:-translate-y-1">
                                <h4 className="font-bold text-xl text-blue-300 mb-2">{util.name}</h4>
                                <p className="text-sm text-gray-400 flex-grow">{util.description}</p>
                            </div>
                        ))}
                    </div>
                     <div className="mt-8 pt-6 border-t border-gray-800/50">
                        <h4 className="font-bold text-xl text-center text-blue-300 mb-4">Future Releases in Development</h4>
                        <div className="text-center text-gray-400 space-y-2">
                            <p>Autonomous Defense Marketplace (External Dev Access to Xentinexuls)</p>
                            <p>Xentinet AI Sentinel API for third-party app protection</p>
                            <p>Cross-Platform Web4 Migration Toolkit</p>
                        </div>
                    </div>
                </Card>

                 <Card title="Additional Core Capabilities" icon={<ShieldIcon />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        {additionalCapabilities.map(item => (
                             <div key={item.title} className="p-3 bg-black/30 rounded-lg">
                                <h4 className="font-bold text-gray-200">{item.title}</h4>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Card>
                
                <Card title="Our Position" icon={<CheckIcon />}>
                    <p className="text-lg text-gray-300 italic leading-relaxed">"Xentinet is not a project. It is the infrastructure standard for how digital assets, identities, and communities will be secured and transacted in the era of Web4. With autonomous AI defense, quantum-aware security, and sovereign user control, Xentinet, Xentispace, and Xentinexuls deliver the future of the internet — safe, seamless, and scam-free."</p>
                     <p className="text-right mt-4 text-sm text-gray-500">- Investor & User Friendly Positioning Statement</p>
                </Card>
            </main>

             <footer className="text-center mt-12 py-4 border-t border-gray-800/50">
                <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Xentinet. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default InfoPage;
