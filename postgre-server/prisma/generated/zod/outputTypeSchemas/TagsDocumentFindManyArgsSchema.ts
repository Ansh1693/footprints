import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentIncludeSchema } from '../inputTypeSchemas/TagsDocumentIncludeSchema'
import { TagsDocumentWhereInputSchema } from '../inputTypeSchemas/TagsDocumentWhereInputSchema'
import { TagsDocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsDocumentOrderByWithRelationInputSchema'
import { TagsDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/TagsDocumentWhereUniqueInputSchema'
import { TagsDocumentScalarFieldEnumSchema } from '../inputTypeSchemas/TagsDocumentScalarFieldEnumSchema'
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

export const TagsDocumentFindManyArgsSchema: z.ZodType<Prisma.TagsDocumentFindManyArgs> = z.object({
  select: TagsDocumentSelectSchema.optional(),
  include: TagsDocumentIncludeSchema.optional(),
  where: TagsDocumentWhereInputSchema.optional(),
  orderBy: z.union([ TagsDocumentOrderByWithRelationInputSchema.array(),TagsDocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsDocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagsDocumentScalarFieldEnumSchema,TagsDocumentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TagsDocumentFindManyArgsSchema;
