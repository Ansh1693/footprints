import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutUserInputSchema } from './BlokCreateWithoutUserInputSchema';
import { BlokUncheckedCreateWithoutUserInputSchema } from './BlokUncheckedCreateWithoutUserInputSchema';
import { BlokCreateOrConnectWithoutUserInputSchema } from './BlokCreateOrConnectWithoutUserInputSchema';
import { BlokUpsertWithWhereUniqueWithoutUserInputSchema } from './BlokUpsertWithWhereUniqueWithoutUserInputSchema';
import { BlokCreateManyUserInputEnvelopeSchema } from './BlokCreateManyUserInputEnvelopeSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateWithWhereUniqueWithoutUserInputSchema } from './BlokUpdateWithWhereUniqueWithoutUserInputSchema';
import { BlokUpdateManyWithWhereWithoutUserInputSchema } from './BlokUpdateManyWithWhereWithoutUserInputSchema';
import { BlokScalarWhereInputSchema } from './BlokScalarWhereInputSchema';

export const BlokUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BlokUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutUserInputSchema),z.lazy(() => BlokCreateWithoutUserInputSchema).array(),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokCreateOrConnectWithoutUserInputSchema),z.lazy(() => BlokCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlokUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BlokUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlokWhereUniqueInputSchema),z.lazy(() => BlokWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlokWhereUniqueInputSchema),z.lazy(() => BlokWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlokWhereUniqueInputSchema),z.lazy(() => BlokWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlokWhereUniqueInputSchema),z.lazy(() => BlokWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlokUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BlokUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlokUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BlokUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlokScalarWhereInputSchema),z.lazy(() => BlokScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BlokUpdateManyWithoutUserNestedInputSchema;
