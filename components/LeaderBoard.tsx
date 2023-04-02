import { LeaderboardItem } from './LeaderBoardItem';

const fakeData = [
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    teamName: 'TEU FRON',
    score: 30,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    teamName: 'Les Cassos',
    score: 20,
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    teamName: 'Les Debilos',
    score: 10,
  },
];

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