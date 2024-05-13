import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateWithoutUserInputSchema } from './BlokFollowersCreateWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateWithoutUserInputSchema } from './BlokFollowersUncheckedCreateWithoutUserInputSchema';
import { BlokFollowersCreateOrConnectWithoutUserInputSchema } from './BlokFollowersCreateOrConnectWithoutUserInputSchema';
import { BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema } from './BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema';
import { BlokFollowersCreateManyUserInputEnvelopeSchema } from './BlokFollowersCreateManyUserInputEnvelopeSchema';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema } from './BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema';
import { BlokFollowersUpdateManyWithWhereWithoutUserInputSchema } from './BlokFollowersUpdateManyWithWhereWithoutUserInputSchema';
import { BlokFollowersScalarWhereInputSchema } from './BlokFollowersScalarWhereInputSchema';

export const BlokFollowersUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BlokFollowersUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersCreateWithoutUserInputSchema).array(),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokFollowersCreateOrConnectWithoutUserInputSchema),z.lazy(() => BlokFollowersCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokFollowersCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlokFollowersUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BlokFollowersUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlokFollowersScalarWhereInputSchema),z.lazy(() => BlokFollowersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BlokFollowersUpdateManyWithoutUserNestedInputSchema;
