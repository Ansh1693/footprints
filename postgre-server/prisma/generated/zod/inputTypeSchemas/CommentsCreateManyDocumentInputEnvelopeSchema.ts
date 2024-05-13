import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateManyDocumentInputSchema } from './CommentsCreateManyDocumentInputSchema';

export const CommentsCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.CommentsCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentsCreateManyDocumentInputSchema),z.lazy(() => CommentsCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CommentsCreateManyDocumentInputEnvelopeSchema;
