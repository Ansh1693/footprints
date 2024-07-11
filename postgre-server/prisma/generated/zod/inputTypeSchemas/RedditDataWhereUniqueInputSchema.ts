import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const RedditDataWhereUniqueInputSchema: z.ZodType<Prisma.RedditDataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    postId: z.string(),
    documentId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    postId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    documentId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    postId: z.string(),
    documentId: z.string(),
  }),
  z.object({
    postId: z.string(),
  }),
  z.object({
    documentId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  postId: z.string().optional(),
  documentId: z.string().optional(),
  AND: z.union([ z.lazy(() => RedditDataWhereInputSchema),z.lazy(() => RedditDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditDataWhereInputSchema),z.lazy(() => RedditDataWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict());

export default RedditDataWhereUniqueInputSchema;
