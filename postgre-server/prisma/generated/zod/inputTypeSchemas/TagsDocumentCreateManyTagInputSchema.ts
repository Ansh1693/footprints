import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagsDocumentCreateManyTagInputSchema: z.ZodType<Prisma.TagsDocumentCreateManyTagInput> = z.object({
  documentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagsDocumentCreateManyTagInputSchema;
