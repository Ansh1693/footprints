import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagsDocumentUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUncheckedCreateWithoutDocumentInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagsDocumentUncheckedCreateWithoutDocumentInputSchema;
