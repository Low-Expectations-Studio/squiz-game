'use client';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import React, { useEffect } from 'react';

export const Question = () => {
  return (
    <div className="flex w-full gap-6">
      <textarea className="flex-1 rounded-lg p-6"></textarea>
      <div className="max-w-[50%] rounded-lg">
        <TransformWrapper>
          <TransformComponent>
            <img src="https://www.enigme-facile.fr/wp-content/uploads/2020/11/25-films-enigme.jpg" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};
