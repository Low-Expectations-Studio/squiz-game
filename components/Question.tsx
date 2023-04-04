import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import React, { FunctionComponent, useEffect } from 'react';

interface QuestionProps {
  title: string;
  description: string;
  scale: string;
}

export const Question: FunctionComponent<QuestionProps> = ({
  title,
  description,
  scale,
}) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-white">{title}</h1>
        <h3 className="text-lg text-white/75">{description}</h3>
      </div>
      <div className="flex w-full gap-6">
        <div className="border-10 flex flex-1 flex-col overflow-hidden rounded-lg border border-black/50 text-sm text-white">
          <textarea className="flex-1 p-6"></textarea>
          <div className="rounded-b-lg bg-black/10 p-2 text-center">
            {scale}
          </div>
        </div>
        <div className="max-w-[50%] overflow-hidden rounded-lg">
          <TransformWrapper>
            <TransformComponent>
              <img src="https://www.enigme-facile.fr/wp-content/uploads/2020/11/25-films-enigme.jpg" />
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
};
