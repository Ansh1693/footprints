import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthSelectSchema } from '../inputTypeSchemas/RedditAuthSelectSchema';
import { RedditAuthIncludeSchema } from '../inputTypeSchemas/RedditAuthIncludeSchema';

export const RedditAuthArgsSchema: z.ZodType<Prisma.RedditAuthDefaultArgs> = z.object({
  select: z.lazy(() => RedditAuthSelectSchema).optional(),
  include: z.lazy(() => RedditAuthIncludeSchema).optional(),
}).strict();

export default RedditAuthArgsSchema;
