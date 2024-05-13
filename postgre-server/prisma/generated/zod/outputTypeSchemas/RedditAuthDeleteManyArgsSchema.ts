import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthWhereInputSchema } from '../inputTypeSchemas/RedditAuthWhereInputSchema'

export const RedditAuthDeleteManyArgsSchema: z.ZodType<Prisma.RedditAuthDeleteManyArgs> = z.object({
  where: RedditAuthWhereInputSchema.optional(),
}).strict() ;

export default RedditAuthDeleteManyArgsSchema;
