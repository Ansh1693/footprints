import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserMetadataCountOrderByAggregateInputSchema } from './UserMetadataCountOrderByAggregateInputSchema';
import { UserMetadataMaxOrderByAggregateInputSchema } from './UserMetadataMaxOrderByAggregateInputSchema';
import { UserMetadataMinOrderByAggregateInputSchema } from './UserMetadataMinOrderByAggregateInputSchema';

export const UserMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserMetadataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profileBanner: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  verified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserMetadataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMetadataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMetadataMinOrderByAggregateInputSchema).optional()
}).strict();

export default UserMetadataOrderByWithAggregationInputSchema;
