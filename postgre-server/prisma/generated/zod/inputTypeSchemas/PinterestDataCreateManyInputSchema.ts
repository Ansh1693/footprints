import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PinterestDataCreateManyInputSchema: z.ZodType<Prisma.PinterestDataCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional().nullable(),
  postId: z.string().optional().nullable(),
  documentId: z.string()
}).strict();

export default PinterestDataCreateManyInputSchema;
