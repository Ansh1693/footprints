import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataWhereInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereInputSchema'
import { DocumentMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentMetadataOrderByWithRelationInputSchema'
import { DocumentMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereUniqueInputSchema'

export const DocumentMetadataAggregateArgsSchema: z.ZodType<Prisma.DocumentMetadataAggregateArgs> = z.object({
  where: DocumentMetadataWhereInputSchema.optional(),
  orderBy: z.union([ DocumentMetadataOrderByWithRelationInputSchema.array(),DocumentMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DocumentMetadataAggregateArgsSchema;
