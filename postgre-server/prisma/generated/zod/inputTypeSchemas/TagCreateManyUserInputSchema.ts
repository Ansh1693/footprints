import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TagCreateManyUserInputSchema: z.ZodType<Prisma.TagCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  tagName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TagCreateManyUserInputSchema;
