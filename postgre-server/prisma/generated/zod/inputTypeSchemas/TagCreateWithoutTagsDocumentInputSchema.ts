import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutTagsInputSchema } from './UserCreateNestedOneWithoutTagsInputSchema';

export const TagCreateWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagCreateWithoutTagsDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default TagCreateWithoutTagsDocumentInputSchema;
