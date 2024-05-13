import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  TagsDocument: z.boolean().optional(),
}).strict();

export default TagCountOutputTypeSelectSchema;
