import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';

export const RedditDataOrderByWithRelationInputSchema: z.ZodType<Prisma.RedditDataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  postId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  Document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional()
}).strict();

export default RedditDataOrderByWithRelationInputSchema;
