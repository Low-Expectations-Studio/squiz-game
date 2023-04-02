import { Timer } from './Timer';

export const GameZone = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} rounded-xl border-2 border-gray-600 border-opacity-30 p-4 backdrop-blur-lg`}
    >
      <Timer duration={100} />
    </div>
  );
};
