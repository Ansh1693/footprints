import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutTagsDocumentInputSchema } from './DocumentCreateNestedOneWithoutTagsDocumentInputSchema';

export const TagsDocumentCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentCreateWithoutTagInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutTagsDocumentInputSchema)
}).strict();

export default TagsDocumentCreateWithoutTagInputSchema;
