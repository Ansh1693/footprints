import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataIncludeSchema } from '../inputTypeSchemas/DocumentMetadataIncludeSchema'
import { DocumentMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereUniqueInputSchema'
import { DocumentMetadataCreateInputSchema } from '../inputTypeSchemas/DocumentMetadataCreateInputSchema'
import { DocumentMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentMetadataUncheckedCreateInputSchema'
import { DocumentMetadataUpdateInputSchema } from '../inputTypeSchemas/DocumentMetadataUpdateInputSchema'
import { DocumentMetadataUncheckedUpdateInputSchema } from '../inputTypeSchemas/DocumentMetadataUncheckedUpdateInputSchema'
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

export const DocumentMetadataUpsertArgsSchema: z.ZodType<Prisma.DocumentMetadataUpsertArgs> = z.object({
  select: DocumentMetadataSelectSchema.optional(),
  include: DocumentMetadataIncludeSchema.optional(),
  where: DocumentMetadataWhereUniqueInputSchema,
  create: z.union([ DocumentMetadataCreateInputSchema,DocumentMetadataUncheckedCreateInputSchema ]),
  update: z.union([ DocumentMetadataUpdateInputSchema,DocumentMetadataUncheckedUpdateInputSchema ]),
}).strict() ;

export default DocumentMetadataUpsertArgsSchema;
