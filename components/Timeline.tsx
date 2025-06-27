
import React from 'react';
import { TimelineEvent } from '../types';
import { CheckIcon } from './icons';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative border-l-2 border-blue-500/30 ml-3">
      {events.map((event, index) => (
        <div key={index} className="mb-8 ml-8">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
            <CheckIcon className="w-4 h-4 text-blue-300" />
          </span>
          <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-200">
            {event.title}
          </h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            {event.date}
          </time>
          <p className="text-base font-normal text-gray-400">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
