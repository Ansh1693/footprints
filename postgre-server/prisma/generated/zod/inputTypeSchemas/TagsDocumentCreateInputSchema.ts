import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedOneWithoutTagsDocumentInputSchema } from './TagCreateNestedOneWithoutTagsDocumentInputSchema';
import { DocumentCreateNestedOneWithoutTagsDocumentInputSchema } from './DocumentCreateNestedOneWithoutTagsDocumentInputSchema';

export const TagsDocumentCreateInputSchema: z.ZodType<Prisma.TagsDocumentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Tag: z.lazy(() => TagCreateNestedOneWithoutTagsDocumentInputSchema),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutTagsDocumentInputSchema)
}).strict();

export default TagsDocumentCreateInputSchema;
