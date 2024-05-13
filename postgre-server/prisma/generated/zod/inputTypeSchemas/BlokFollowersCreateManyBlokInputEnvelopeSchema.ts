import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateManyBlokInputSchema } from './BlokFollowersCreateManyBlokInputSchema';

export const BlokFollowersCreateManyBlokInputEnvelopeSchema: z.ZodType<Prisma.BlokFollowersCreateManyBlokInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BlokFollowersCreateManyBlokInputSchema),z.lazy(() => BlokFollowersCreateManyBlokInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BlokFollowersCreateManyBlokInputEnvelopeSchema;
