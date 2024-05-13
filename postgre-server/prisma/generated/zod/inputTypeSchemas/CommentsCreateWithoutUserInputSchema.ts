import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutCommentsInputSchema } from './DocumentCreateNestedOneWithoutCommentsInputSchema';

export const CommentsCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentsCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  body: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export default CommentsCreateWithoutUserInputSchema;
