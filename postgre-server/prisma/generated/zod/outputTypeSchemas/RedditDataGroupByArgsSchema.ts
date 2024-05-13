import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataWhereInputSchema } from '../inputTypeSchemas/RedditDataWhereInputSchema'
import { RedditDataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RedditDataOrderByWithAggregationInputSchema'
import { RedditDataScalarFieldEnumSchema } from '../inputTypeSchemas/RedditDataScalarFieldEnumSchema'
import { RedditDataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RedditDataScalarWhereWithAggregatesInputSchema'

export const RedditDataGroupByArgsSchema: z.ZodType<Prisma.RedditDataGroupByArgs> = z.object({
  where: RedditDataWhereInputSchema.optional(),
  orderBy: z.union([ RedditDataOrderByWithAggregationInputSchema.array(),RedditDataOrderByWithAggregationInputSchema ]).optional(),
  by: RedditDataScalarFieldEnumSchema.array(),
  having: RedditDataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RedditDataGroupByArgsSchema;
