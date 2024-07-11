import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentIncludeSchema } from '../inputTypeSchemas/DocumentIncludeSchema'
import { DocumentWhereInputSchema } from '../inputTypeSchemas/DocumentWhereInputSchema'
import { DocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DocumentOrderByWithRelationInputSchema'
import { DocumentWhereUniqueInputSchema } from '../inputTypeSchemas/DocumentWhereUniqueInputSchema'
import { DocumentScalarFieldEnumSchema } from '../inputTypeSchemas/DocumentScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CommentsFindManyArgsSchema } from "../outputTypeSchemas/CommentsFindManyArgsSchema"
import { DocumentMetadataArgsSchema } from "../outputTypeSchemas/DocumentMetadataArgsSchema"
import { RedditDataArgsSchema } from "../outputTypeSchemas/RedditDataArgsSchema"
import { PinterestDataArgsSchema } from "../outputTypeSchemas/PinterestDataArgsSchema"
import { TagsDocumentFindManyArgsSchema } from "../outputTypeSchemas/TagsDocumentFindManyArgsSchema"
import { BloksDocumentFindManyArgsSchema } from "../outputTypeSchemas/BloksDocumentFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentSelectSchema: z.ZodType<Prisma.DocumentSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  profileId: z.boolean().optional(),
  heading: z.boolean().optional(),
  body: z.boolean().optional(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  pinned: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Comments: z.union([z.boolean(),z.lazy(() => CommentsFindManyArgsSchema)]).optional(),
  DocumentMetadata: z.union([z.boolean(),z.lazy(() => DocumentMetadataArgsSchema)]).optional(),
  RedditData: z.union([z.boolean(),z.lazy(() => RedditDataArgsSchema)]).optional(),
  PinterestData: z.union([z.boolean(),z.lazy(() => PinterestDataArgsSchema)]).optional(),
  TagsDocument: z.union([z.boolean(),z.lazy(() => TagsDocumentFindManyArgsSchema)]).optional(),
  BloksDocument: z.union([z.boolean(),z.lazy(() => BloksDocumentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DocumentFindFirstArgsSchema: z.ZodType<Prisma.DocumentFindFirstArgs> = z.object({
  select: DocumentSelectSchema.optional(),
  include: DocumentIncludeSchema.optional(),
  where: DocumentWhereInputSchema.optional(),
  orderBy: z.union([ DocumentOrderByWithRelationInputSchema.array(),DocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: DocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocumentScalarFieldEnumSchema,DocumentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DocumentFindFirstArgsSchema;
