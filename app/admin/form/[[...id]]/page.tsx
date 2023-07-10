import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

export default function AdminFormPage({
  params,
}: {
  params: { id?: string[] };
}) {
  const quizId = params.id && params.id[0];

  return (
    <>
      <div className="flex">
        <Link href="/admin" className="flex items-center justify-center">
          <BiArrowBack className="mr-3 h-5 w-5 cursor-pointer text-gray-600" />
        </Link>

        <h2 className="w-full text-xl font-semibold">
          {quizId ? `Edit quiz ${quizId}` : 'Create new quiz'}
        </h2>
      </div>

      <div>TODO</div>
    </>
  );
}
