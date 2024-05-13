import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagsDocumentCreateManyInputSchema: z.ZodType<Prisma.TagsDocumentCreateManyInput> = z.object({
  tagId: z.string(),
  documentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagsDocumentCreateManyInputSchema;
