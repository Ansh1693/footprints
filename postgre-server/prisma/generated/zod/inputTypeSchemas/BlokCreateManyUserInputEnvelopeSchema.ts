import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateManyUserInputSchema } from './BlokCreateManyUserInputSchema';

export const BlokCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BlokCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BlokCreateManyUserInputSchema),z.lazy(() => BlokCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BlokCreateManyUserInputEnvelopeSchema;
