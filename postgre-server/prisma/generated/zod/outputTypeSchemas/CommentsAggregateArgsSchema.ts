import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsWhereInputSchema } from '../inputTypeSchemas/CommentsWhereInputSchema'
import { CommentsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CommentsOrderByWithRelationInputSchema'
import { CommentsWhereUniqueInputSchema } from '../inputTypeSchemas/CommentsWhereUniqueInputSchema'

export const CommentsAggregateArgsSchema: z.ZodType<Prisma.CommentsAggregateArgs> = z.object({
  where: CommentsWhereInputSchema.optional(),
  orderBy: z.union([ CommentsOrderByWithRelationInputSchema.array(),CommentsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CommentsAggregateArgsSchema;
