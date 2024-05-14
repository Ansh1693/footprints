import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentCreateManyInputSchema: z.ZodType<Prisma.DocumentCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  pinned: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentCreateManyInputSchema;
