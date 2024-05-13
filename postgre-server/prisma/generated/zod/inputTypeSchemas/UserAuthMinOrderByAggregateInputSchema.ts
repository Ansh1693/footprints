import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserAuthMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserAuthMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  GoogleAuthId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  RedditAuthId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserAuthMinOrderByAggregateInputSchema;
