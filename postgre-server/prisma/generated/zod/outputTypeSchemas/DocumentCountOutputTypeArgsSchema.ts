import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentCountOutputTypeSelectSchema } from './DocumentCountOutputTypeSelectSchema';

export const DocumentCountOutputTypeArgsSchema: z.ZodType<Prisma.DocumentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DocumentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DocumentCountOutputTypeSelectSchema;
