import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokUpdateWithoutBlokMetadataInputSchema } from './BlokUpdateWithoutBlokMetadataInputSchema';
import { BlokUncheckedUpdateWithoutBlokMetadataInputSchema } from './BlokUncheckedUpdateWithoutBlokMetadataInputSchema';
import { BlokCreateWithoutBlokMetadataInputSchema } from './BlokCreateWithoutBlokMetadataInputSchema';
import { BlokUncheckedCreateWithoutBlokMetadataInputSchema } from './BlokUncheckedCreateWithoutBlokMetadataInputSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokUpsertWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokUpsertWithoutBlokMetadataInput> = z.object({
  update: z.union([ z.lazy(() => BlokUpdateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokMetadataInputSchema) ]),
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokMetadataInputSchema) ]),
  where: z.lazy(() => BlokWhereInputSchema).optional()
}).strict();

export default BlokUpsertWithoutBlokMetadataInputSchema;
