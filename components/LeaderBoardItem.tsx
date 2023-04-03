'use client';

import React from 'react';

type LeaderboardItemProps = {
  rank: number;
  teamName: string;
  score: number;
  avatarUrl: string;
};

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  rank,
  teamName,
  score,
  avatarUrl,
}) => {
  return (
    <div className="flex h-16 items-center rounded-full border border-black border-opacity-50 shadow-lg backdrop-blur-md backdrop-saturate-150">
      <div className="flex-shrink-0">
        <div
          style={{
            backgroundImage: `url(${avatarUrl})`,
            WebkitTextStroke: '1px rgba(0,0,0,.7)',
          }}
          className="bold flex h-16 w-16 items-center justify-center rounded-full bg-cover text-2xl font-bold text-white"
        >
          {rank}
        </div>
      </div>
      <div className="ml-4 text-gray-300">
        <div className="text-xl font-medium">{teamName}</div>
        <div className="text-sm">
          {`Total score: `} <span className="font-bold">{score}</span>
        </div>
      </div>
    </div>
  );
};
