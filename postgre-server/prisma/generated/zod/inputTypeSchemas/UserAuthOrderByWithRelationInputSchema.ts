import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { GoogleAuthOrderByWithRelationInputSchema } from './GoogleAuthOrderByWithRelationInputSchema';
import { RedditAuthOrderByWithRelationInputSchema } from './RedditAuthOrderByWithRelationInputSchema';

export const UserAuthOrderByWithRelationInputSchema: z.ZodType<Prisma.UserAuthOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthOrderByWithRelationInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthOrderByWithRelationInputSchema).optional()
}).strict();

export default UserAuthOrderByWithRelationInputSchema;
