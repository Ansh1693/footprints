import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutUserInputSchema } from './BlokCreateWithoutUserInputSchema';
import { BlokUncheckedCreateWithoutUserInputSchema } from './BlokUncheckedCreateWithoutUserInputSchema';
import { BlokCreateOrConnectWithoutUserInputSchema } from './BlokCreateOrConnectWithoutUserInputSchema';
import { BlokCreateManyUserInputEnvelopeSchema } from './BlokCreateManyUserInputEnvelopeSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';

export const BlokCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BlokCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutUserInputSchema),z.lazy(() => BlokCreateWithoutUserInputSchema).array(),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokCreateOrConnectWithoutUserInputSchema),z.lazy(() => BlokCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlokWhereUniqueInputSchema),z.lazy(() => BlokWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BlokCreateNestedManyWithoutUserInputSchema;
