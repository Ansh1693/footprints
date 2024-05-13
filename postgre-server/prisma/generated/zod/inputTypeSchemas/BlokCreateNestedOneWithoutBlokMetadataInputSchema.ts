import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBlokMetadataInputSchema } from './BlokCreateWithoutBlokMetadataInputSchema';
import { BlokUncheckedCreateWithoutBlokMetadataInputSchema } from './BlokUncheckedCreateWithoutBlokMetadataInputSchema';
import { BlokCreateOrConnectWithoutBlokMetadataInputSchema } from './BlokCreateOrConnectWithoutBlokMetadataInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';

export const BlokCreateNestedOneWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokCreateNestedOneWithoutBlokMetadataInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBlokMetadataInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional()
}).strict();

export default BlokCreateNestedOneWithoutBlokMetadataInputSchema;
