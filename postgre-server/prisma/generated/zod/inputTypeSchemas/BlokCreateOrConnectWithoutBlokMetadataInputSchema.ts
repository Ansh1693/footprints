import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokCreateWithoutBlokMetadataInputSchema } from './BlokCreateWithoutBlokMetadataInputSchema';
import { BlokUncheckedCreateWithoutBlokMetadataInputSchema } from './BlokUncheckedCreateWithoutBlokMetadataInputSchema';

export const BlokCreateOrConnectWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokCreateOrConnectWithoutBlokMetadataInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokMetadataInputSchema) ]),
}).strict();

export default BlokCreateOrConnectWithoutBlokMetadataInputSchema;
