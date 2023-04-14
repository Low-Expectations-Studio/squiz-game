import { FunctionComponent } from 'react';

import { ProgressionItem } from './ProgressionItem';

interface ProgressionProps {
  className: string;
  totalQuestions?: number;
  currentQuestion?: number;
  percentRatio: number;
}

export const Progression: FunctionComponent<ProgressionProps> = ({
  className,
  currentQuestion = 5,
  totalQuestions = 20,
  percentRatio,
}) => {
  return (
    <footer className={`${className} flex justify-center gap-4`}>
      {[...Array(totalQuestions)].map((_, index) => {
        const questionIndex = index + 1;

        let ratio = questionIndex < currentQuestion ? 1 : 0;
        if (questionIndex === currentQuestion) {
          ratio = percentRatio;
        }

        return (
          <ProgressionItem
            key={questionIndex}
            number={questionIndex}
            percentRatio={ratio}
          />
        );
      })}
    </footer>
  );
};
