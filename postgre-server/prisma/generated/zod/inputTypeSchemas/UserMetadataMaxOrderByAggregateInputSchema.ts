import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const UserMetadataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMetadataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileImage: z.lazy(() => SortOrderSchema).optional(),
  profileBanner: z.lazy(() => SortOrderSchema).optional(),
  verified: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserMetadataMaxOrderByAggregateInputSchema;
