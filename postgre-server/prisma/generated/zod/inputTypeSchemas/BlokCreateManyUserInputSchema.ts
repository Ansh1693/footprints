import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const BlokCreateManyUserInputSchema: z.ZodType<Prisma.BlokCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokCreateManyUserInputSchema;
