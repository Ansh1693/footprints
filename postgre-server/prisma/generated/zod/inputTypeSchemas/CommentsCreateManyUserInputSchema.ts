import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentsCreateManyUserInputSchema: z.ZodType<Prisma.CommentsCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CommentsCreateManyUserInputSchema;
