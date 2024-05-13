import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataWhereUniqueInputSchema } from './BlokMetadataWhereUniqueInputSchema';
import { BlokMetadataCreateWithoutBlokInputSchema } from './BlokMetadataCreateWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateWithoutBlokInputSchema';

export const BlokMetadataCreateOrConnectWithoutBlokInputSchema: z.ZodType<Prisma.BlokMetadataCreateOrConnectWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokMetadataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokMetadataCreateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default BlokMetadataCreateOrConnectWithoutBlokInputSchema;
