import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema: z.ZodType<Prisma.TagsDocumentTagIdDocumentIdCompoundUniqueInput> = z.object({
  tagId: z.string(),
  documentId: z.string()
}).strict();

export default TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema;
