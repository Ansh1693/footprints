import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentsCreateManyDocumentInputSchema: z.ZodType<Prisma.CommentsCreateManyDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CommentsCreateManyDocumentInputSchema;
