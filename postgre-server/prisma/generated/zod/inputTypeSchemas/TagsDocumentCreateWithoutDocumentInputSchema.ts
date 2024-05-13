import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedOneWithoutTagsDocumentInputSchema } from './TagCreateNestedOneWithoutTagsDocumentInputSchema';

export const TagsDocumentCreateWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentCreateWithoutDocumentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Tag: z.lazy(() => TagCreateNestedOneWithoutTagsDocumentInputSchema)
}).strict();

export default TagsDocumentCreateWithoutDocumentInputSchema;
