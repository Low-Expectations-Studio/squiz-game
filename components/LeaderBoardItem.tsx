import React from 'react';

type LeaderboardItemProps = {
  teamName: string;
  score: number;
  avatarUrl: string;
};

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  teamName,
  score,
  avatarUrl,
}) => {
  return (
    <div className="flex h-16 items-center rounded-full border border-black border-opacity-50 shadow-lg backdrop-blur-md backdrop-saturate-150 backdrop-filter">
      <div className="flex-shrink-0">
        <img
          className="h-16 w-16 rounded-full"
          src={avatarUrl}
          alt={`Avatar for ${teamName}`}
        />
      </div>
      <div className="ml-4">
        <div className="text-xl font-medium text-gray-500">{teamName}</div>
        <div className="text-sm text-gray-500">{`Total score: ${score}`}</div>
      </div>
    </div>
  );
};
