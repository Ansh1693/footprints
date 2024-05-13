import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentsInputSchema } from './UserCreateNestedOneWithoutCommentsInputSchema';

export const CommentsCreateWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export default CommentsCreateWithoutDocumentInputSchema;
