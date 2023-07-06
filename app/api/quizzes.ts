import {
  type Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';

import { db, genericConverter } from '~/lib/firebase';

interface Quiz {
  id: string;
  name: string;
  description: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export async function getQuizzes() {
  const q = query(
    collection(db, 'quizzes'),
    orderBy('createdAt'),
  ).withConverter(genericConverter<Quiz>());

  const quizzesQuerySnapshot = await getDocs(q);

  return quizzesQuerySnapshot.docs.map((doc) => doc.data());
}
