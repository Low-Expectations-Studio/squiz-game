import 'react-loading-skeleton/dist/skeleton.css';
import { Suspense } from 'react';

import { QuizListSkeleton } from '~/admin/components/QuizListSkeleton';
import { QuizList } from '~/admin/components/QuizList';

// enforce dynamic fetching behaviour
export const revalidate = 0;

export default function AdminPage() {
  return (
    <main className="flex h-full flex-col p-8">
      <div className="flex w-full items-center justify-between pb-6">
        <h2 className="w-full text-3xl font-bold">Quiz List</h2>
        <button className="btn-secondary btn-sm btn">New Quiz</button>
      </div>

      <Suspense fallback={<QuizListSkeleton />}>
        <QuizList />
      </Suspense>
    </main>
  );
}
