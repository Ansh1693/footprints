import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';

export const RedditDataOrderByWithRelationInputSchema: z.ZodType<Prisma.RedditDataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  Document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional()
}).strict();

export default RedditDataOrderByWithRelationInputSchema;
