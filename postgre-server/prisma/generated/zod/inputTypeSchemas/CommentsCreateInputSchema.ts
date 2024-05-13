import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentsInputSchema } from './UserCreateNestedOneWithoutCommentsInputSchema';
import { DocumentCreateNestedOneWithoutCommentsInputSchema } from './DocumentCreateNestedOneWithoutCommentsInputSchema';

export const CommentsCreateInputSchema: z.ZodType<Prisma.CommentsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export default CommentsCreateInputSchema;
