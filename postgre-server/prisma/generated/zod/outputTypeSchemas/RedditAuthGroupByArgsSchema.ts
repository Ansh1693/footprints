import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthWhereInputSchema } from '../inputTypeSchemas/RedditAuthWhereInputSchema'
import { RedditAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RedditAuthOrderByWithAggregationInputSchema'
import { RedditAuthScalarFieldEnumSchema } from '../inputTypeSchemas/RedditAuthScalarFieldEnumSchema'
import { RedditAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RedditAuthScalarWhereWithAggregatesInputSchema'

export const RedditAuthGroupByArgsSchema: z.ZodType<Prisma.RedditAuthGroupByArgs> = z.object({
  where: RedditAuthWhereInputSchema.optional(),
  orderBy: z.union([ RedditAuthOrderByWithAggregationInputSchema.array(),RedditAuthOrderByWithAggregationInputSchema ]).optional(),
  by: RedditAuthScalarFieldEnumSchema.array(),
  having: RedditAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RedditAuthGroupByArgsSchema;
