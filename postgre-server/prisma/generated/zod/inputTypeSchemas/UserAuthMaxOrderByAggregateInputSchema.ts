import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserAuthMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserAuthMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  GoogleAuthId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  RedditAuthId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserAuthMaxOrderByAggregateInputSchema;
