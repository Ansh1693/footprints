import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataWhereInputSchema } from '../inputTypeSchemas/RedditDataWhereInputSchema'

export const RedditDataDeleteManyArgsSchema: z.ZodType<Prisma.RedditDataDeleteManyArgs> = z.object({
  where: RedditDataWhereInputSchema.optional(),
}).strict() ;

export default RedditDataDeleteManyArgsSchema;
