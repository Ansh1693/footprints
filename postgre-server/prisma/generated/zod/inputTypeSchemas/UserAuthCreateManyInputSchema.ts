import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserAuthCreateManyInputSchema: z.ZodType<Prisma.UserAuthCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserAuthCreateManyInputSchema;
