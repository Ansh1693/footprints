import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DocumentCountOrderByAggregateInputSchema: z.ZodType<Prisma.DocumentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  heading: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  public: z.lazy(() => SortOrderSchema).optional(),
  deleted: z.lazy(() => SortOrderSchema).optional(),
  pinned: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DocumentCountOrderByAggregateInputSchema;
