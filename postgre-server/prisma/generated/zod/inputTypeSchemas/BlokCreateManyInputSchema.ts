import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokCreateManyInputSchema: z.ZodType<Prisma.BlokCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokCreateManyInputSchema;
