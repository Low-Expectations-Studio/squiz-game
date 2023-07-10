import 'react-loading-skeleton/dist/skeleton.css';
import { Suspense } from 'react';

import { QuizListSkeleton } from '~/admin/(home)/components/QuizListSkeleton';
import { QuizList } from '~/admin/(home)/components/QuizList';

// enforce dynamic fetching behaviour
export const revalidate = 0;

export default function AdminHomePage() {
  return (
    <>
      <div className="flex w-full items-center justify-between pb-6">
        <h2 className="w-full text-xl font-semibold">Quiz List</h2>

        <button className="btn-secondary btn-sm btn">New Quiz</button>
      </div>

      <Suspense fallback={<QuizListSkeleton />}>
        <QuizList />
      </Suspense>
    </>
  );
}
