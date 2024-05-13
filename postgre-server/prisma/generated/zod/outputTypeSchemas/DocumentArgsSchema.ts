import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentSelectSchema } from '../inputTypeSchemas/DocumentSelectSchema';
import { DocumentIncludeSchema } from '../inputTypeSchemas/DocumentIncludeSchema';

export const DocumentArgsSchema: z.ZodType<Prisma.DocumentDefaultArgs> = z.object({
  select: z.lazy(() => DocumentSelectSchema).optional(),
  include: z.lazy(() => DocumentIncludeSchema).optional(),
}).strict();

export default DocumentArgsSchema;
