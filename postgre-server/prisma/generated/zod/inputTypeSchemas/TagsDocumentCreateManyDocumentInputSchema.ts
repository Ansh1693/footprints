import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagsDocumentCreateManyDocumentInputSchema: z.ZodType<Prisma.TagsDocumentCreateManyDocumentInput> = z.object({
  tagId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagsDocumentCreateManyDocumentInputSchema;
