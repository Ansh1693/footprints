import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CommentsFindManyArgsSchema } from "../outputTypeSchemas/CommentsFindManyArgsSchema"
import { DocumentMetadataArgsSchema } from "../outputTypeSchemas/DocumentMetadataArgsSchema"
import { RedditDataArgsSchema } from "../outputTypeSchemas/RedditDataArgsSchema"
import { PinterestDataArgsSchema } from "../outputTypeSchemas/PinterestDataArgsSchema"
import { TagsDocumentFindManyArgsSchema } from "../outputTypeSchemas/TagsDocumentFindManyArgsSchema"
import { BloksDocumentFindManyArgsSchema } from "../outputTypeSchemas/BloksDocumentFindManyArgsSchema"
import { DocumentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DocumentCountOutputTypeArgsSchema"

export const DocumentIncludeSchema: z.ZodType<Prisma.DocumentInclude> = z.object({
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Comments: z.union([z.boolean(),z.lazy(() => CommentsFindManyArgsSchema)]).optional(),
  DocumentMetadata: z.union([z.boolean(),z.lazy(() => DocumentMetadataArgsSchema)]).optional(),
  RedditData: z.union([z.boolean(),z.lazy(() => RedditDataArgsSchema)]).optional(),
  PinterestData: z.union([z.boolean(),z.lazy(() => PinterestDataArgsSchema)]).optional(),
  TagsDocument: z.union([z.boolean(),z.lazy(() => TagsDocumentFindManyArgsSchema)]).optional(),
  BloksDocument: z.union([z.boolean(),z.lazy(() => BloksDocumentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocumentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DocumentIncludeSchema;
