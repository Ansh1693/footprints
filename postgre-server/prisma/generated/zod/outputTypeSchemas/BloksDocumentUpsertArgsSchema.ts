import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentIncludeSchema } from '../inputTypeSchemas/BloksDocumentIncludeSchema'
import { BloksDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/BloksDocumentWhereUniqueInputSchema'
import { BloksDocumentCreateInputSchema } from '../inputTypeSchemas/BloksDocumentCreateInputSchema'
import { BloksDocumentUncheckedCreateInputSchema } from '../inputTypeSchemas/BloksDocumentUncheckedCreateInputSchema'
import { BloksDocumentUpdateInputSchema } from '../inputTypeSchemas/BloksDocumentUpdateInputSchema'
import { BloksDocumentUncheckedUpdateInputSchema } from '../inputTypeSchemas/BloksDocumentUncheckedUpdateInputSchema'
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BloksDocumentSelectSchema: z.ZodType<Prisma.BloksDocumentSelect> = z.object({
  blokId: z.boolean().optional(),
  documentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const BloksDocumentUpsertArgsSchema: z.ZodType<Prisma.BloksDocumentUpsertArgs> = z.object({
  select: BloksDocumentSelectSchema.optional(),
  include: BloksDocumentIncludeSchema.optional(),
  where: BloksDocumentWhereUniqueInputSchema,
  create: z.union([ BloksDocumentCreateInputSchema,BloksDocumentUncheckedCreateInputSchema ]),
  update: z.union([ BloksDocumentUpdateInputSchema,BloksDocumentUncheckedUpdateInputSchema ]),
}).strict() ;

export default BloksDocumentUpsertArgsSchema;
