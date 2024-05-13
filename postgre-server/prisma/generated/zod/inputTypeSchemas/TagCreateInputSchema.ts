import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutTagsInputSchema } from './UserCreateNestedOneWithoutTagsInputSchema';
import { TagsDocumentCreateNestedManyWithoutTagInputSchema } from './TagsDocumentCreateNestedManyWithoutTagInputSchema';

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutTagsInputSchema),
  TagsDocument: z.lazy(() => TagsDocumentCreateNestedManyWithoutTagInputSchema).optional()
}).strict();

export default TagCreateInputSchema;
