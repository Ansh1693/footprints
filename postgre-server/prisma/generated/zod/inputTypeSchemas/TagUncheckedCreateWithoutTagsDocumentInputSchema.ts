import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagUncheckedCreateWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutTagsDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagUncheckedCreateWithoutTagsDocumentInputSchema;
