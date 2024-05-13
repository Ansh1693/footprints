import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentIncludeSchema } from '../inputTypeSchemas/TagsDocumentIncludeSchema'
import { TagsDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/TagsDocumentWhereUniqueInputSchema'
import { TagsDocumentCreateInputSchema } from '../inputTypeSchemas/TagsDocumentCreateInputSchema'
import { TagsDocumentUncheckedCreateInputSchema } from '../inputTypeSchemas/TagsDocumentUncheckedCreateInputSchema'
import { TagsDocumentUpdateInputSchema } from '../inputTypeSchemas/TagsDocumentUpdateInputSchema'
import { TagsDocumentUncheckedUpdateInputSchema } from '../inputTypeSchemas/TagsDocumentUncheckedUpdateInputSchema'
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

export const TagsDocumentUpsertArgsSchema: z.ZodType<Prisma.TagsDocumentUpsertArgs> = z.object({
  select: TagsDocumentSelectSchema.optional(),
  include: TagsDocumentIncludeSchema.optional(),
  where: TagsDocumentWhereUniqueInputSchema,
  create: z.union([ TagsDocumentCreateInputSchema,TagsDocumentUncheckedCreateInputSchema ]),
  update: z.union([ TagsDocumentUpdateInputSchema,TagsDocumentUncheckedUpdateInputSchema ]),
}).strict() ;

export default TagsDocumentUpsertArgsSchema;
