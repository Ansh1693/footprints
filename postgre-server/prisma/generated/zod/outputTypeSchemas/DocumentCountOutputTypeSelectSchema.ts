import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.DocumentCountOutputTypeSelect> = z.object({
  Comments: z.boolean().optional(),
  TagsDocument: z.boolean().optional(),
  BloksDocument: z.boolean().optional(),
}).strict();

export default DocumentCountOutputTypeSelectSchema;
