import { FunctionComponent } from 'react';

import { Question } from './Question';
import { Timer } from './Timer';

interface GameZoneProps {
  className: string;
  timeLeft: number;
}
export const GameZone: FunctionComponent<GameZoneProps> = ({
  className,
  timeLeft,
}) => {
  return (
    <div
      className={`flex flex-col gap-6 ${className} rounded-xl border-2 border-gray-600 border-opacity-30 p-6 backdrop-blur-lg`}
    >
      <Timer duration={100} timeLeft={timeLeft} />
      <Question />
    </div>
  );
};
