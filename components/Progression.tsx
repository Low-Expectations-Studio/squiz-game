'use client';

import { FunctionComponent } from 'react';

import { ProgressionItem } from './ProgressionItem';

interface ProgressionProps {
  className: string;
  totalQuestions?: number;
  currentQuestion?: number;
}

export const Progression: FunctionComponent<ProgressionProps> = ({
  className,
  currentQuestion = 5,
  totalQuestions = 20,
}) => {
  return (
    <footer className={`${className} flex justify-center gap-4`}>
      {[...Array(totalQuestions)].map((_, index) => {
        const questionIndex = index + 1;
        return (
          <ProgressionItem
            key={questionIndex}
            number={questionIndex}
            percent={questionIndex < currentQuestion ? 100 : 50}
          />
        );
      })}
    </footer>
  );
};
