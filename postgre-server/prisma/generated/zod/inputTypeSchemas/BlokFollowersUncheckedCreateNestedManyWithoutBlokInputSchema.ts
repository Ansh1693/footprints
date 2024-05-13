import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersCreateWithoutBlokInputSchema } from './BlokFollowersCreateWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateWithoutBlokInputSchema';
import { BlokFollowersCreateOrConnectWithoutBlokInputSchema } from './BlokFollowersCreateOrConnectWithoutBlokInputSchema';
import { BlokFollowersCreateManyBlokInputEnvelopeSchema } from './BlokFollowersCreateManyBlokInputEnvelopeSchema';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';

export const BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUncheckedCreateNestedManyWithoutBlokInput> = z.object({
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema).array(),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BlokFollowersCreateOrConnectWithoutBlokInputSchema),z.lazy(() => BlokFollowersCreateOrConnectWithoutBlokInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BlokFollowersCreateManyBlokInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BlokFollowersWhereUniqueInputSchema),z.lazy(() => BlokFollowersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema;
