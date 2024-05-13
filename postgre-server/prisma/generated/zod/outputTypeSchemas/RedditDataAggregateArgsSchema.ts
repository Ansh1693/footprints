import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataWhereInputSchema } from '../inputTypeSchemas/RedditDataWhereInputSchema'
import { RedditDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/RedditDataOrderByWithRelationInputSchema'
import { RedditDataWhereUniqueInputSchema } from '../inputTypeSchemas/RedditDataWhereUniqueInputSchema'

export const RedditDataAggregateArgsSchema: z.ZodType<Prisma.RedditDataAggregateArgs> = z.object({
  where: RedditDataWhereInputSchema.optional(),
  orderBy: z.union([ RedditDataOrderByWithRelationInputSchema.array(),RedditDataOrderByWithRelationInputSchema ]).optional(),
  cursor: RedditDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RedditDataAggregateArgsSchema;
