import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateWithoutBlokInputSchema } from './BlokFollowersCreateWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateWithoutBlokInputSchema';
import { BlokFollowersCreateOrConnectWithoutBlokInputSchema } from './BlokFollowersCreateOrConnectWithoutBlokInputSchema';
import { BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema } from './BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema';
import { BlokFollowersCreateManyBlokInputEnvelopeSchema } from './BlokFollowersCreateManyBlokInputEnvelopeSchema';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema } from './BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema';
import { BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema } from './BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema';
import { BlokFollowersScalarWhereInputSchema } from './BlokFollowersScalarWhereInputSchema';

export const BlokFollowersUncheckedUpdateManyWithoutBlokNestedInputSchema: z.ZodType<Prisma.BlokFollowersUncheckedUpdateManyWithoutBlokNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema).array(),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokFollowersCreateOrConnectWithoutBlokInputSchema),z.lazy(() => BlokFollowersCreateOrConnectWithoutBlokInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema),z.lazy(() => BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokFollowersCreateManyBlokInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema),z.lazy(() => BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema),z.lazy(() => BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BlokFollowersScalarWhereInputSchema),z.lazy(() => BlokFollowersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BlokFollowersUncheckedUpdateManyWithoutBlokNestedInputSchema;
