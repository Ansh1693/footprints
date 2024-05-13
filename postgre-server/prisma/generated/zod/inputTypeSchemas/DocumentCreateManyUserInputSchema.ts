import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const DocumentCreateManyUserInputSchema: z.ZodType<Prisma.DocumentCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  Status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentCreateManyUserInputSchema;
