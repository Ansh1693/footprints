import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsWhereInputSchema } from '../inputTypeSchemas/CommentsWhereInputSchema'
import { CommentsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CommentsOrderByWithAggregationInputSchema'
import { CommentsScalarFieldEnumSchema } from '../inputTypeSchemas/CommentsScalarFieldEnumSchema'
import { CommentsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CommentsScalarWhereWithAggregatesInputSchema'

export const CommentsGroupByArgsSchema: z.ZodType<Prisma.CommentsGroupByArgs> = z.object({
  where: CommentsWhereInputSchema.optional(),
  orderBy: z.union([ CommentsOrderByWithAggregationInputSchema.array(),CommentsOrderByWithAggregationInputSchema ]).optional(),
  by: CommentsScalarFieldEnumSchema.array(),
  having: CommentsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CommentsGroupByArgsSchema;
