import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    AUTH_GOOGLE_CLIENT_ID: z.string().min(1),
    AUTH_GOOGLE_CLIENT_SECRET: z.string().min(1),
    AUTH_GOOGLE_AUTHORIZED_DOMAINS: z
      .string()
      .transform((s) => s.split(',').map((part) => part.trim())),
    AUTH_ADMIN_EMAILS: z
      .string()
      .transform((s) => s.split(',').map((part) => part.trim())),
  },
  client: {
    NEXT_PUBLIC_FIRESTORE_PROJECT_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_CLIENT_EMAIL: z.string(),
    NEXT_PUBLIC_FIRESTORE_CLIENT_PRIVATE_KEY: z.string(),
    NEXT_PUBLIC_FIRESTORE_API_KEY: z.string(),
    NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN: z.string(),
    NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET: z.string(),
    NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_APP_ID: z.string(),
    NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_FIRESTORE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
    NEXT_PUBLIC_FIRESTORE_CLIENT_EMAIL:
      process.env.NEXT_PUBLIC_FIRESTORE_CLIENT_EMAIL,
    NEXT_PUBLIC_FIRESTORE_CLIENT_PRIVATE_KEY:
      process.env.NEXT_PUBLIC_FIRESTORE_CLIENT_PRIVATE_KEY,
    NEXT_PUBLIC_FIRESTORE_API_KEY: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
    NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET:
      process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,

    NEXT_PUBLIC_FIRESTORE_APP_ID: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
    NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID,
  },
});
