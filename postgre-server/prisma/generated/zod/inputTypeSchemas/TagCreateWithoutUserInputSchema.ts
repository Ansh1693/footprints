import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateNestedManyWithoutTagInputSchema } from './TagsDocumentCreateNestedManyWithoutTagInputSchema';

export const TagCreateWithoutUserInputSchema: z.ZodType<Prisma.TagCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TagsDocument: z.lazy(() => TagsDocumentCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagCreateWithoutUserInputSchema;
