import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PinterestDataUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.PinterestDataUncheckedCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional().nullable(),
  postId: z.string().optional().nullable()
}).strict();

export default PinterestDataUncheckedCreateWithoutDocumentInputSchema;
