import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentWhereInputSchema } from '../inputTypeSchemas/BloksDocumentWhereInputSchema'
import { BloksDocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/BloksDocumentOrderByWithRelationInputSchema'
import { BloksDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/BloksDocumentWhereUniqueInputSchema'

export const BloksDocumentAggregateArgsSchema: z.ZodType<Prisma.BloksDocumentAggregateArgs> = z.object({
  where: BloksDocumentWhereInputSchema.optional(),
  orderBy: z.union([ BloksDocumentOrderByWithRelationInputSchema.array(),BloksDocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: BloksDocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BloksDocumentAggregateArgsSchema;
