import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserAuthOrderByWithRelationInputSchema } from './UserAuthOrderByWithRelationInputSchema';

export const GoogleAuthOrderByWithRelationInputSchema: z.ZodType<Prisma.GoogleAuthOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userAuthId: z.lazy(() => SortOrderSchema).optional(),
  accessToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refreshToken: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  UserAuth: z.lazy(() => UserAuthOrderByWithRelationInputSchema).optional()
}).strict();

export default GoogleAuthOrderByWithRelationInputSchema;
