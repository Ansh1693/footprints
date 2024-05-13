import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateManyUserInputSchema } from './CommentsCreateManyUserInputSchema';

export const CommentsCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CommentsCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CommentsCreateManyUserInputSchema),z.lazy(() => CommentsCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CommentsCreateManyUserInputEnvelopeSchema;
