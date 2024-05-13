import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateManyUserInputSchema } from './DocumentCreateManyUserInputSchema';

export const DocumentCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.DocumentCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentCreateManyUserInputSchema),z.lazy(() => DocumentCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DocumentCreateManyUserInputEnvelopeSchema;
