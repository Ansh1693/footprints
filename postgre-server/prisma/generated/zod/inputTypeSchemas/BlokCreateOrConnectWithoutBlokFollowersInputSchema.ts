import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokCreateWithoutBlokFollowersInputSchema } from './BlokCreateWithoutBlokFollowersInputSchema';
import { BlokUncheckedCreateWithoutBlokFollowersInputSchema } from './BlokUncheckedCreateWithoutBlokFollowersInputSchema';

export const BlokCreateOrConnectWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokCreateOrConnectWithoutBlokFollowersInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokFollowersInputSchema) ]),
}).strict();

export default BlokCreateOrConnectWithoutBlokFollowersInputSchema;
