'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
  timeLeft: number;
  duration: number; // in seconds
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, duration }) => {
  const progress = (timeLeft / duration) * 100;
  const gradientColors = `bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`;
  const barStyles = {
    width: `${progress}%`,
    transition: 'width 1s linear',
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-2 text-lg font-bold text-gray-300">
        <div>Time left:</div>
        <div className="relative grow overflow-hidden rounded-full border-2 border-gray-600 border-opacity-30 p-1">
          <div
            className={`${gradientColors} h-4 rounded-full`}
            style={barStyles}
          />
        </div>
        <div>{timeLeft} s</div>
      </div>
      <div className="text-gray-500">
        Questions are automatically submitted when time ends
      </div>
    </div>
  );
};
