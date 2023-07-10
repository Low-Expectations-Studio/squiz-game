import { format } from 'date-fns';

import { getQuizzes } from '~/api/quizzes';

export async function QuizList() {
  const quizzes = await getQuizzes();

  return (
    <div className="h-full overflow-auto rounded-t-lg">
      <table className="table-pin-rows table-zebra table-sm table w-full">
        <thead className="top-0">
          <tr className="h-12 [&>th]:bg-gray-300">
            <th className="w-6/12">Name</th>
            <th className="w-1/12 text-end">Questions</th>
            <th className="w-1/12 text-end">Created At</th>
            <th className="w-1/12 text-end">Updated At</th>
            <th className="w-1/12 text-end">Status</th>
            <th className="w-2/12 text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => {
              return (
                <tr key={quiz.id} className="h-12">
                  <td>{quiz.name}</td>
                  <td className="text-end">TODO</td>
                  <td className="text-end">
                    {format(quiz.createdAt.toDate(), 'MM/dd/yyyy')}
                  </td>
                  <td className="text-end">
                    {quiz.updatedAt &&
                      format(quiz.updatedAt.toDate(), 'MM/dd/yyyy')}
                  </td>
                  <td className="text-end">TODO</td>
                  <td className="text-end">TODO</td>
                </tr>
              );
            })
          ) : (
            <tr className="h-12">
              <td colSpan={7}>
                <span className="flex w-full items-center justify-center">
                  No quiz yet
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
