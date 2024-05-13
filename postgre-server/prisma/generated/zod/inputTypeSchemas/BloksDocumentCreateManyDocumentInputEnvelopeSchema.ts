import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateManyDocumentInputSchema } from './BloksDocumentCreateManyDocumentInputSchema';

export const BloksDocumentCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.BloksDocumentCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BloksDocumentCreateManyDocumentInputSchema),z.lazy(() => BloksDocumentCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BloksDocumentCreateManyDocumentInputEnvelopeSchema;
