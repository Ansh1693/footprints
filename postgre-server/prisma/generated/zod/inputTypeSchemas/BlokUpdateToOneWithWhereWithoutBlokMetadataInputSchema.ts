import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { BlokUpdateWithoutBlokMetadataInputSchema } from './BlokUpdateWithoutBlokMetadataInputSchema';
import { BlokUncheckedUpdateWithoutBlokMetadataInputSchema } from './BlokUncheckedUpdateWithoutBlokMetadataInputSchema';

export const BlokUpdateToOneWithWhereWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokUpdateToOneWithWhereWithoutBlokMetadataInput> = z.object({
  where: z.lazy(() => BlokWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlokUpdateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokMetadataInputSchema) ]),
}).strict();

export default BlokUpdateToOneWithWhereWithoutBlokMetadataInputSchema;
