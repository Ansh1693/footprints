import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataIncludeSchema } from '../inputTypeSchemas/DocumentMetadataIncludeSchema'
import { DocumentMetadataWhereInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereInputSchema'
import { DocumentMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentMetadataOrderByWithRelationInputSchema'
import { DocumentMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereUniqueInputSchema'
import { DocumentMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentMetadataScalarFieldEnumSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentMetadataSelectSchema: z.ZodType<Prisma.DocumentMetadataSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  documentType: z.boolean().optional(),
  bodyImageUrl: z.boolean().optional(),
  sourceUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const DocumentMetadataFindManyArgsSchema: z.ZodType<Prisma.DocumentMetadataFindManyArgs> = z.object({
  select: DocumentMetadataSelectSchema.optional(),
  include: DocumentMetadataIncludeSchema.optional(),
  where: DocumentMetadataWhereInputSchema.optional(),
  orderBy: z.union([ DocumentMetadataOrderByWithRelationInputSchema.array(),DocumentMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentMetadataScalarFieldEnumSchema,DocumentMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DocumentMetadataFindManyArgsSchema;
