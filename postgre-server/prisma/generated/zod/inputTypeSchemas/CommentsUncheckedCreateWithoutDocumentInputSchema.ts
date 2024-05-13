import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentsUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsUncheckedCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CommentsUncheckedCreateWithoutDocumentInputSchema;
