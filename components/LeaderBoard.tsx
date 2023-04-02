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
    avatarUrl: 'https://i.pravatar.cc/300?u=5',
    teamName: 'Les Double Cassos',
    score: rand(),
  },
  {
    avatarUrl: 'https://i.pravatar.cc/300?u=6',
    teamName: 'Les Debilos',
    score: rand(),
  },
].sort((a, b) => b.score - a.score);

export const LeaderBoard = ({ className }: { className: string }) => {
  return (
    <section className={`${className} flex flex-col gap-4`}>
      <h1 className="text-2xl">Leader Board</h1>
      {fakeData.map(({ avatarUrl, teamName, score }) => (
        <LeaderboardItem
          key={teamName}
          avatarUrl={avatarUrl}
          score={score}
          teamName={teamName}
        />
      ))}
    </section>
  );
};
