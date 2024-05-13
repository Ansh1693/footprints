import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentUncheckedCreateNestedManyWithoutTagInputSchema } from './TagsDocumentUncheckedCreateNestedManyWithoutTagInputSchema';

export const TagUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TagsDocument: z.lazy(() => TagsDocumentUncheckedCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagUncheckedCreateWithoutUserInputSchema;
