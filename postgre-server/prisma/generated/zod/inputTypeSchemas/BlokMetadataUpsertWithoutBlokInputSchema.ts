import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataUpdateWithoutBlokInputSchema } from './BlokMetadataUpdateWithoutBlokInputSchema';
import { BlokMetadataUncheckedUpdateWithoutBlokInputSchema } from './BlokMetadataUncheckedUpdateWithoutBlokInputSchema';
import { BlokMetadataCreateWithoutBlokInputSchema } from './BlokMetadataCreateWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateWithoutBlokInputSchema';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';

export const BlokMetadataUpsertWithoutBlokInputSchema: z.ZodType<Prisma.BlokMetadataUpsertWithoutBlokInput> = z.object({
  update: z.union([ z.lazy(() => BlokMetadataUpdateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedUpdateWithoutBlokInputSchema) ]),
  create: z.union([ z.lazy(() => BlokMetadataCreateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedCreateWithoutBlokInputSchema) ]),
  where: z.lazy(() => BlokMetadataWhereInputSchema).optional()
}).strict();

export default BlokMetadataUpsertWithoutBlokInputSchema;
