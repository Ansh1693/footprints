import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataWhereInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereInputSchema'
import { DocumentMetadataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DocumentMetadataOrderByWithAggregationInputSchema'
import { DocumentMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentMetadataScalarFieldEnumSchema'
import { DocumentMetadataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DocumentMetadataScalarWhereWithAggregatesInputSchema'

export const DocumentMetadataGroupByArgsSchema: z.ZodType<Prisma.DocumentMetadataGroupByArgs> = z.object({
  where: DocumentMetadataWhereInputSchema.optional(),
  orderBy: z.union([ DocumentMetadataOrderByWithAggregationInputSchema.array(),DocumentMetadataOrderByWithAggregationInputSchema ]).optional(),
  by: DocumentMetadataScalarFieldEnumSchema.array(),
  having: DocumentMetadataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DocumentMetadataGroupByArgsSchema;
