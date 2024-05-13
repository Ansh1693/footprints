import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthWhereInputSchema } from '../inputTypeSchemas/RedditAuthWhereInputSchema'
import { RedditAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/RedditAuthOrderByWithRelationInputSchema'
import { RedditAuthWhereUniqueInputSchema } from '../inputTypeSchemas/RedditAuthWhereUniqueInputSchema'

export const RedditAuthAggregateArgsSchema: z.ZodType<Prisma.RedditAuthAggregateArgs> = z.object({
  where: RedditAuthWhereInputSchema.optional(),
  orderBy: z.union([ RedditAuthOrderByWithRelationInputSchema.array(),RedditAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: RedditAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RedditAuthAggregateArgsSchema;
