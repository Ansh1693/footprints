import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserCreateManyInputSchema;
