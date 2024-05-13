import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataCreateManyInputSchema } from '../inputTypeSchemas/RedditDataCreateManyInputSchema'

export const RedditDataCreateManyArgsSchema: z.ZodType<Prisma.RedditDataCreateManyArgs> = z.object({
  data: z.union([ RedditDataCreateManyInputSchema,RedditDataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RedditDataCreateManyArgsSchema;
