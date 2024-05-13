import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBlokFollowersInputSchema } from './BlokCreateWithoutBlokFollowersInputSchema';
import { BlokUncheckedCreateWithoutBlokFollowersInputSchema } from './BlokUncheckedCreateWithoutBlokFollowersInputSchema';
import { BlokCreateOrConnectWithoutBlokFollowersInputSchema } from './BlokCreateOrConnectWithoutBlokFollowersInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';

export const BlokCreateNestedOneWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokCreateNestedOneWithoutBlokFollowersInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBlokFollowersInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional()
}).strict();

export default BlokCreateNestedOneWithoutBlokFollowersInputSchema;
