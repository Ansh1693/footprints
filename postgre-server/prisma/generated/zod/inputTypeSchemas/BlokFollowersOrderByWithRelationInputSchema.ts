import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BlokOrderByWithRelationInputSchema } from './BlokOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const BlokFollowersOrderByWithRelationInputSchema: z.ZodType<Prisma.BlokFollowersOrderByWithRelationInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Blok: z.lazy(() => BlokOrderByWithRelationInputSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default BlokFollowersOrderByWithRelationInputSchema;
