import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { CommentsListRelationFilterSchema } from './CommentsListRelationFilterSchema';
import { DocumentMetadataNullableRelationFilterSchema } from './DocumentMetadataNullableRelationFilterSchema';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';
import { RedditDataNullableRelationFilterSchema } from './RedditDataNullableRelationFilterSchema';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';
import { PinterestDataNullableRelationFilterSchema } from './PinterestDataNullableRelationFilterSchema';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';
import { TagsDocumentListRelationFilterSchema } from './TagsDocumentListRelationFilterSchema';
import { BloksDocumentListRelationFilterSchema } from './BloksDocumentListRelationFilterSchema';

export const DocumentWhereUniqueInputSchema: z.ZodType<Prisma.DocumentWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => DocumentWhereInputSchema),z.lazy(() => DocumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentWhereInputSchema),z.lazy(() => DocumentWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  heading: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  body: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pinned: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  comment: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  Comments: z.lazy(() => CommentsListRelationFilterSchema).optional(),
  DocumentMetadata: z.union([ z.lazy(() => DocumentMetadataNullableRelationFilterSchema),z.lazy(() => DocumentMetadataWhereInputSchema) ]).optional().nullable(),
  RedditData: z.union([ z.lazy(() => RedditDataNullableRelationFilterSchema),z.lazy(() => RedditDataWhereInputSchema) ]).optional().nullable(),
  PinterestData: z.union([ z.lazy(() => PinterestDataNullableRelationFilterSchema),z.lazy(() => PinterestDataWhereInputSchema) ]).optional().nullable(),
  TagsDocument: z.lazy(() => TagsDocumentListRelationFilterSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentListRelationFilterSchema).optional()
}).strict());

export default DocumentWhereUniqueInputSchema;
