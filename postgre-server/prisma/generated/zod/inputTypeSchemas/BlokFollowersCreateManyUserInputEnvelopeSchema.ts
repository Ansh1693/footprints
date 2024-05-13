import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateManyUserInputSchema } from './BlokFollowersCreateManyUserInputSchema';

export const BlokFollowersCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BlokFollowersCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BlokFollowersCreateManyUserInputSchema),z.lazy(() => BlokFollowersCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BlokFollowersCreateManyUserInputEnvelopeSchema;
