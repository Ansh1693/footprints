import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const RedditDataWhereInputSchema: z.ZodType<Prisma.RedditDataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RedditDataWhereInputSchema),z.lazy(() => RedditDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditDataWhereInputSchema),z.lazy(() => RedditDataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict();

export default RedditDataWhereInputSchema;
