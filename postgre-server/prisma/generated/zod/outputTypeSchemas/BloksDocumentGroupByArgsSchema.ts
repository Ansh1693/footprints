import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentWhereInputSchema } from '../inputTypeSchemas/BloksDocumentWhereInputSchema'
import { BloksDocumentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BloksDocumentOrderByWithAggregationInputSchema'
import { BloksDocumentScalarFieldEnumSchema } from '../inputTypeSchemas/BloksDocumentScalarFieldEnumSchema'
import { BloksDocumentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BloksDocumentScalarWhereWithAggregatesInputSchema'

export const BloksDocumentGroupByArgsSchema: z.ZodType<Prisma.BloksDocumentGroupByArgs> = z.object({
  where: BloksDocumentWhereInputSchema.optional(),
  orderBy: z.union([ BloksDocumentOrderByWithAggregationInputSchema.array(),BloksDocumentOrderByWithAggregationInputSchema ]).optional(),
  by: BloksDocumentScalarFieldEnumSchema.array(),
  having: BloksDocumentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BloksDocumentGroupByArgsSchema;
