import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthCreateManyInputSchema } from '../inputTypeSchemas/RedditAuthCreateManyInputSchema'

export const RedditAuthCreateManyArgsSchema: z.ZodType<Prisma.RedditAuthCreateManyArgs> = z.object({
  data: z.union([ RedditAuthCreateManyInputSchema,RedditAuthCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RedditAuthCreateManyArgsSchema;
