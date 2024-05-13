import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateManyUserInputSchema } from './TagCreateManyUserInputSchema';

export const TagCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TagCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagCreateManyUserInputSchema),z.lazy(() => TagCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagCreateManyUserInputEnvelopeSchema;
