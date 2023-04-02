import { Question } from './Question';
import { Timer } from './Timer';

export const GameZone = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex flex-col gap-6 ${className} rounded-xl border-2 border-gray-600 border-opacity-30 p-6 backdrop-blur-lg`}
    >
      <Timer duration={100} />
      <Question />
    </div>
  );
};
