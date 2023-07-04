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
    FIRESTORE_PROJECT_ID: z.string(),
    FIRESTORE_CLIENT_EMAIL: z.string(),
    FIRESTORE_CLIENT_PRIVATE_KEY: z.string(),
  },
});
