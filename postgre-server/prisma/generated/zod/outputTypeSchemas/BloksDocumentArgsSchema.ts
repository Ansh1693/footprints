import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentSelectSchema } from '../inputTypeSchemas/BloksDocumentSelectSchema';
import { BloksDocumentIncludeSchema } from '../inputTypeSchemas/BloksDocumentIncludeSchema';

export const BloksDocumentArgsSchema: z.ZodType<Prisma.BloksDocumentDefaultArgs> = z.object({
  select: z.lazy(() => BloksDocumentSelectSchema).optional(),
  include: z.lazy(() => BloksDocumentIncludeSchema).optional(),
}).strict();

export default BloksDocumentArgsSchema;
