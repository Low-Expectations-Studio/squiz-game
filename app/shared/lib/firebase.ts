// import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  getFirestore,
} from 'firebase/firestore';

import { env } from '~/env.mjs';

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIRESTORE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const db = getFirestore(getApp());
export function genericConverter<T>() {
  return {
    toFirestore(data: T): T {
      return data;
    },
    fromFirestore(
      snapshot: QueryDocumentSnapshot<T>,
      options: SnapshotOptions,
    ) {
      return { id: snapshot.id, ...snapshot.data(options) };
    },
  };
}

// export const analytics = getAnalytics(getApp());
