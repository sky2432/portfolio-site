import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_GA_ID: z.string().optional(),
    NEXT_PUBLIC_SITE_URL: z.url(),
  },
  runtimeEnv: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_API_URL: process.env.MICROCMS_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  server: {
    MICROCMS_API_KEY: z.string(),
    MICROCMS_API_URL: z.url(),
  },
});
