import { LeaderboardItem } from './LeaderBoardItem';

const fakeData = [
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=1',
    teamName: 'TEU FRON',
    score: 100,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=2',
    teamName: 'Les Cassos',
    score: 76,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=3',
    teamName: 'Les Debilos',
    score: 56,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=4',
    teamName: 'ATAFE',
    score: 31,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=5',
    teamName: 'Les Double Cassos',
    score: 18,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=6',
    teamName: 'Los Occupados',
    score: 17,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=7',
    teamName: 'Les Zinzins du boulot',
    score: 2,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=8',
    teamName: 'Les Debilos',
    score: 1,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=9',
    teamName: 'Les Coolos',
    score: 45,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=10',
    teamName: 'Les Double Cassos',
    score: 340,
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=11',
    teamName: 'Despacitos',
    score: 230,
  },
].sort((a, b) => b.score - a.score);

export const LeaderBoard = ({ className }: { className: string }) => {
  return (
    <section className={`${className} flex flex-col gap-4 overflow-hidden`}>
      <h1 className="text-xl font-bold text-gray-300">Leader Board</h1>
      <div className="flex flex-col gap-4 overflow-scroll">
        {fakeData.map(({ avatarUrl, teamName, score }, index) => (
          <LeaderboardItem
            key={index}
            rank={index + 1}
            avatarUrl={avatarUrl}
            score={score}
            teamName={teamName}
          />
        ))}
      </div>
    </section>
  );
};
