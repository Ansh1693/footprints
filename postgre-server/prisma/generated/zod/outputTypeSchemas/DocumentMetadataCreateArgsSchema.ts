import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataIncludeSchema } from '../inputTypeSchemas/DocumentMetadataIncludeSchema'
import { DocumentMetadataCreateInputSchema } from '../inputTypeSchemas/DocumentMetadataCreateInputSchema'
import { DocumentMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/DocumentMetadataUncheckedCreateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentMetadataSelectSchema: z.ZodType<Prisma.DocumentMetadataSelect> = z.object({
  id: z.boolean().optional(),
  documentId: z.boolean().optional(),
  documentType: z.boolean().optional(),
  url: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const DocumentMetadataCreateArgsSchema: z.ZodType<Prisma.DocumentMetadataCreateArgs> = z.object({
  select: DocumentMetadataSelectSchema.optional(),
  include: DocumentMetadataIncludeSchema.optional(),
  data: z.union([ DocumentMetadataCreateInputSchema,DocumentMetadataUncheckedCreateInputSchema ]),
}).strict() ;

export default DocumentMetadataCreateArgsSchema;
