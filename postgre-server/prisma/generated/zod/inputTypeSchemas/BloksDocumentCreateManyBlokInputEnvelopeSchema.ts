import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateManyBlokInputSchema } from './BloksDocumentCreateManyBlokInputSchema';

export const BloksDocumentCreateManyBlokInputEnvelopeSchema: z.ZodType<Prisma.BloksDocumentCreateManyBlokInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BloksDocumentCreateManyBlokInputSchema),z.lazy(() => BloksDocumentCreateManyBlokInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BloksDocumentCreateManyBlokInputEnvelopeSchema;
