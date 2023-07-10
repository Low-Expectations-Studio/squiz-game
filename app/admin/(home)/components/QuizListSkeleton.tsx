import Skeleton from 'react-loading-skeleton';

export function QuizListSkeleton() {
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
          {[...Array(10)].map((_, index) => (
            <tr key={index} className="h-12">
              <td>
                <Skeleton height={20} />
              </td>
              <td>
                <Skeleton height={20} />
              </td>
              <td>
                <Skeleton height={20} />
              </td>
              <td>
                <Skeleton height={20} />
              </td>
              <td>
                <Skeleton height={20} />
              </td>
              <td>
                <Skeleton height={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
