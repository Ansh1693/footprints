import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { GoogleAuthCountOrderByAggregateInputSchema } from './GoogleAuthCountOrderByAggregateInputSchema';
import { GoogleAuthMaxOrderByAggregateInputSchema } from './GoogleAuthMaxOrderByAggregateInputSchema';
import { GoogleAuthMinOrderByAggregateInputSchema } from './GoogleAuthMinOrderByAggregateInputSchema';

export const GoogleAuthOrderByWithAggregationInputSchema: z.ZodType<Prisma.GoogleAuthOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userAuthId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GoogleAuthCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GoogleAuthMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GoogleAuthMinOrderByAggregateInputSchema).optional()
}).strict();

export default GoogleAuthOrderByWithAggregationInputSchema;
