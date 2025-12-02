import { Experience, Project, SkillGroup } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance',
    role: 'Freelance Developer',
    company: 'Telegram Bots & Web Systems',
    period: 'Current',
    description: [
      'Architected custom Telegram automation systems and crypto-integrated applications.',
      'Developed high-performance bots handling real-time data streams and user interactions.',
      'Designed secure withdrawal interfaces and betting systems.'
    ],
    tech: ['Node.js', 'Telegraf.js', 'Next.js', 'Solana RPC'],
    modes: ['all', 'backend', 'frontend']
  },
  {
    id: 'ozone',
    role: 'Backend Developer',
    company: 'Ozone Chain',
    period: 'Remote',
    description: [
      'Built a referral and reward management Telegram bot using Node.js and TypeScript.',
      'Integrated on-chain reward withdrawals and community tipping systems.',
      'Managed data persistence with MongoDB/Mongoose.'
    ],
    tech: ['Node.js', 'TypeScript', 'MongoDB', 'Web3'],
    modes: ['all', 'backend']
  },
  {
    id: 'codinary',
    role: 'Fullstack Developer',
    company: 'Codinary',
    period: 'Remote',
    description: [
      'Deployed scalable React + Next.js applications backed by Node.js services.',
      'Optimized database reliability using Firebase and Supabase.',
      'Streamlined deployment pipelines for improved uptime.'
    ],
    tech: ['React', 'Next.js', 'Firebase', 'Supabase'],
    modes: ['all', 'frontend', 'backend']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'pump-fun',
    title: 'Pump.fun Token Watcher',
    description: 'A high-frequency trading intelligence bot monitoring newly listed Solana tokens. Features rotating proxies for API stability, configurable timeframe analytics, and auto-buy logic based on liquidity thresholds.',
    tags: ['Solana', 'Automation', 'Analytics', 'RPC'],
    type: 'bot',
    modes: ['all', 'backend']
  },
  {
    id: 'research-ai',
    title: 'AI Research Assistant',
    description: 'An intelligent agent built with Mastra AI and Next.js. Utilizes serverless API routes and a file-based vector store for contextual retrieval of research data. Integrated Turso (SQLite) for production data.',
    tags: ['Mastra AI', 'Vector DB', 'RAG', 'Next.js'],
    type: 'system',
    modes: ['all', 'backend', 'frontend']
  },
  {
    id: 'wallet-tracker',
    title: 'Solana Wallet Tracker',
    description: 'Real-time surveillance system for monitoring specific wallet activities. Pushes instant notifications for token purchases and transfers, enabling copy-trading strategies.',
    tags: ['Real-time', 'WebSockets', 'Bot', 'Crypto'],
    type: 'bot',
    modes: ['all', 'backend']
  },
  {
    id: 'betting-bot',
    title: 'PvP Betting System',
    description: 'A Tic-Tac-Toe crypto betting bot on Telegram. Includes a secure wallet management system, real-time game state synchronization, and a Next.js mini-app interface for withdrawals.',
    tags: ['GameDev', 'Crypto', 'Next.js', 'Security'],
    type: 'bot',
    modes: ['all', 'frontend', 'backend']
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend & UI',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    modes: ['all', 'frontend']
  },
  {
    category: 'Backend Core',
    skills: ['Node.js', 'Python', 'Express.js', 'Microservices', 'REST API'],
    modes: ['all', 'backend']
  },
  {
    category: 'Data & AI',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mastra AI', 'Vector Stores'],
    modes: ['all', 'backend']
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Git', 'CI/CD', 'WebSockets', 'Serverless'],
    modes: ['all', 'backend']
  },
  {
    category: 'Web3',
    skills: ['Solana Web3.js', 'Telegram API', 'Smart Contract Integration'],
    modes: ['all', 'backend']
  }
];