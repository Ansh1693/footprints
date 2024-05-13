import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentIncludeSchema } from '../inputTypeSchemas/BloksDocumentIncludeSchema'
import { BloksDocumentWhereInputSchema } from '../inputTypeSchemas/BloksDocumentWhereInputSchema'
import { BloksDocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/BloksDocumentOrderByWithRelationInputSchema'
import { BloksDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/BloksDocumentWhereUniqueInputSchema'
import { BloksDocumentScalarFieldEnumSchema } from '../inputTypeSchemas/BloksDocumentScalarFieldEnumSchema'
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

export const BloksDocumentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BloksDocumentFindFirstOrThrowArgs> = z.object({
  select: BloksDocumentSelectSchema.optional(),
  include: BloksDocumentIncludeSchema.optional(),
  where: BloksDocumentWhereInputSchema.optional(),
  orderBy: z.union([ BloksDocumentOrderByWithRelationInputSchema.array(),BloksDocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: BloksDocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BloksDocumentScalarFieldEnumSchema,BloksDocumentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BloksDocumentFindFirstOrThrowArgsSchema;
