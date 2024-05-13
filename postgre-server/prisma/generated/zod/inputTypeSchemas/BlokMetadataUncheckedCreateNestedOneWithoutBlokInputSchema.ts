import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataCreateWithoutBlokInputSchema } from './BlokMetadataCreateWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateWithoutBlokInputSchema';
import { BlokMetadataCreateOrConnectWithoutBlokInputSchema } from './BlokMetadataCreateOrConnectWithoutBlokInputSchema';
import { BlokMetadataWhereUniqueInputSchema } from './BlokMetadataWhereUniqueInputSchema';

export const BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema: z.ZodType<Prisma.BlokMetadataUncheckedCreateNestedOneWithoutBlokInput> = z.object({
  create: z.union([ z.lazy(() => BlokMetadataCreateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedCreateWithoutBlokInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokMetadataCreateOrConnectWithoutBlokInputSchema).optional(),
  connect: z.lazy(() => BlokMetadataWhereUniqueInputSchema).optional()
}).strict();

export default BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema;
