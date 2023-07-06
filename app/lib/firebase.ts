// import { getAnalytics } from 'firebase/analytics';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  getFirestore,
} from 'firebase/firestore';

import { env } from '~/env.mjs';

const firebaseConfig = {
  apiKey: env.FIRESTORE_API_KEY,
  authDomain: env.FIRESTORE_AUTH_DOMAIN,
  projectId: env.FIRESTORE_PROJECT_ID,
  storageBucket: env.FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: env.FIRESTORE_MESSAGING_SENDER_ID,
  appId: env.FIRESTORE_APP_ID,
  measurementId: env.FIRESTORE_MEASUREMENT_ID,
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
