import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';
import { BlokMetadataUpdateWithoutBlokInputSchema } from './BlokMetadataUpdateWithoutBlokInputSchema';
import { BlokMetadataUncheckedUpdateWithoutBlokInputSchema } from './BlokMetadataUncheckedUpdateWithoutBlokInputSchema';

export const BlokMetadataUpdateToOneWithWhereWithoutBlokInputSchema: z.ZodType<Prisma.BlokMetadataUpdateToOneWithWhereWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokMetadataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlokMetadataUpdateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedUpdateWithoutBlokInputSchema) ]),
}).strict();

export default BlokMetadataUpdateToOneWithWhereWithoutBlokInputSchema;
