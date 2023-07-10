import 'react-loading-skeleton/dist/skeleton.css';
import Link from 'next/link';
import { Suspense } from 'react';

import { QuizListSkeleton } from '~/admin/(home)/components/QuizListSkeleton';
import { QuizList } from '~/admin/(home)/components/QuizList';

export default async function AdminHomePage() {
  return (
    <>
      <div className="flex w-full items-center justify-between pb-6">
        <h2 className="w-full text-xl font-semibold">Quiz List</h2>

        <Link href="/admin/form" className="btn-secondary btn-sm btn">
          New Quiz
        </Link>
      </div>

      <Suspense fallback={<QuizListSkeleton />}>
        <QuizList />
      </Suspense>
    </>
  );
}
