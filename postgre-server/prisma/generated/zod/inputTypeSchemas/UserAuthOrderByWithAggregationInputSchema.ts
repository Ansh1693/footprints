import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserAuthCountOrderByAggregateInputSchema } from './UserAuthCountOrderByAggregateInputSchema';
import { UserAuthMaxOrderByAggregateInputSchema } from './UserAuthMaxOrderByAggregateInputSchema';
import { UserAuthMinOrderByAggregateInputSchema } from './UserAuthMinOrderByAggregateInputSchema';

export const UserAuthOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserAuthOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  GoogleAuthId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  RedditAuthId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserAuthCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserAuthMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserAuthMinOrderByAggregateInputSchema).optional()
}).strict();

export default UserAuthOrderByWithAggregationInputSchema;
