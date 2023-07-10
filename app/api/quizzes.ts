import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { db, genericConverter } from '~/shared/lib/firebase';

export interface Quiz {
  id: string;
  name: string;
  description: string;
  createdAt: number;
  updatedAt?: number;
}

export async function getQuizzes() {
  const q = query(
    collection(db, 'quizzes'),
    orderBy('createdAt'),
  ).withConverter(genericConverter<Quiz>());

  const quizzesQuerySnapshot = await getDocs(q);

  return quizzesQuerySnapshot.docs.map((doc) => doc.data());
}
