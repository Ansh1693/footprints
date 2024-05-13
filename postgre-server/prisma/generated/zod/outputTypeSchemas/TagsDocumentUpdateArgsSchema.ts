import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentIncludeSchema } from '../inputTypeSchemas/TagsDocumentIncludeSchema'
import { TagsDocumentUpdateInputSchema } from '../inputTypeSchemas/TagsDocumentUpdateInputSchema'
import { TagsDocumentUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagsDocumentUncheckedUpdateInputSchema'
import { TagsDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/TagsDocumentWhereUniqueInputSchema'
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TagsDocumentSelectSchema: z.ZodType<Prisma.TagsDocumentSelect> = z.object({
  tagId: z.boolean().optional(),
  documentId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const TagsDocumentUpdateArgsSchema: z.ZodType<Prisma.TagsDocumentUpdateArgs> = z.object({
  select: TagsDocumentSelectSchema.optional(),
  include: TagsDocumentIncludeSchema.optional(),
  data: z.union([ TagsDocumentUpdateInputSchema,TagsDocumentUncheckedUpdateInputSchema ]),
  where: TagsDocumentWhereUniqueInputSchema,
}).strict() ;

export default TagsDocumentUpdateArgsSchema;
