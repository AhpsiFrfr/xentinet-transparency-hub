
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', icon, title }) => {
  return (
    <div className={`bg-gray-900/50 border border-blue-500/20 rounded-xl p-6 relative backdrop-blur-sm shadow-lg shadow-blue-900/10 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-xl pointer-events-none"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {icon && <div className="text-blue-400 mr-3 w-6 h-6">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-100 font-orbitron">{title}</h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
