import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserAuthOrderByWithRelationInputSchema } from './UserAuthOrderByWithRelationInputSchema';

export const RedditAuthOrderByWithRelationInputSchema: z.ZodType<Prisma.RedditAuthOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userAuthId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  redditId: z.lazy(() => SortOrderSchema).optional(),
  redditUsername: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  UserAuth: z.lazy(() => UserAuthOrderByWithRelationInputSchema).optional()
}).strict();

export default RedditAuthOrderByWithRelationInputSchema;
