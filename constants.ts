import { TokenAllocationData, Wallet, TimelineEvent } from './types';

export const XENTICORE_LOGO_DATA_URI: string = '/xenticore.png';

export const TOKEN_ALLOCATION_DATA: TokenAllocationData[] = [
  { name: 'Team', value: 15, fill: '#0ea5e9' }, // sky-500
  { name: 'Treasury', value: 30, fill: '#3b82f6' }, // blue-500
  { name: 'Public Sale', value: 25, fill: '#6366f1' }, // indigo-500
  { name: 'Marketing & Partnerships', value: 10, fill: '#8b5cf6' }, // violet-500
  { name: 'Liquidity', value: 15, fill: '#22d3ee' }, // cyan-400
  { name: 'Ecosystem', value: 5, fill: '#a78bfa' }, // violet-400
];

export const WALLETS: Wallet[] = [
    { name: 'Treasury', address: '0x1A2b3c4D5e6F7g8H9i0JkL1m2N3o4P5q6R7s8T9u' },
    { name: 'Marketing', address: '0x2B3c4d5e6f7g8h9i0jK1l2m3n4o5p6q7R8s9t0U' },
    { name: 'Liquidity Pools', address: '0x3C4d5e6f7g8h9i0j1k2L3m4n5o6p7q8R9s0t1u' },
    { name: 'Development Reserves', address: '0x4D5e6f7g8h9i0j1k2l3M4n5o6p7q8r9S0t1u2v' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    title: 'Token Deployed',
    date: 'February 22, 2024',
    description: 'The $XENTI token smart contract was successfully deployed to the mainnet.',
  },
  {
    title: 'Liquidity Locked',
    date: 'March 1, 2024',
    description: 'Initial liquidity pool was created and locked for a period of 5 years to ensure stability.',
  },
  {
    title: 'Security Audit Completed',
    date: 'May 15, 2024',
    description: 'A comprehensive third-party security audit was completed with zero critical vulnerabilities found.',
  },
  {
    title: 'First Users Onboarded',
    date: 'June 5, 2024',
    description: 'The Xentinet platform alpha was opened to a select group of initial users.',
  },
];