import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateWithoutUserInputSchema } from './BlokFollowersCreateWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateWithoutUserInputSchema } from './BlokFollowersUncheckedCreateWithoutUserInputSchema';
import { BlokFollowersCreateOrConnectWithoutUserInputSchema } from './BlokFollowersCreateOrConnectWithoutUserInputSchema';
import { BlokFollowersCreateManyUserInputEnvelopeSchema } from './BlokFollowersCreateManyUserInputEnvelopeSchema';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';

export const BlokFollowersCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersCreateWithoutUserInputSchema).array(),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokFollowersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BlokFollowersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokFollowersCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BlokFollowersCreateNestedManyWithoutUserInputSchema;
