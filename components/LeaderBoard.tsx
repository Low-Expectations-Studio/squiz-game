import { LeaderboardItem } from './LeaderBoardItem';

const rand = () => Math.round(Math.random() * 100);

const fakeData = [
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=1',
    teamName: 'TEU FRON',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=2',
    teamName: 'Les Cassos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=3',
    teamName: 'Les Debilos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=4',
    teamName: 'ATAFE',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=5',
    teamName: 'Les Double Cassos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=6',
    teamName: 'Les Debilos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=7',
    teamName: 'Les Double Cassos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=8',
    teamName: 'Les Debilos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=9',
    teamName: 'Les Debilos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=10',
    teamName: 'Les Double Cassos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=11',
    teamName: 'Les Debilos',
    score: rand(),
  },
].sort((a, b) => b.score - a.score);

export const LeaderBoard = ({ className }: { className: string }) => {
  return (
    <section className={`${className} flex flex-col gap-4 overflow-hidden`}>
      <h1 className="text-2xl">Leader Board</h1>
      <div className="flex flex-col gap-4 overflow-scroll">
        {fakeData.map(({ avatarUrl, teamName, score }, index) => (
          <LeaderboardItem
            key={teamName}
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
