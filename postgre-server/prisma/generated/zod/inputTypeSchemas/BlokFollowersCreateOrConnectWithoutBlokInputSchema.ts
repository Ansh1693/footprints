import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersCreateWithoutBlokInputSchema } from './BlokFollowersCreateWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateWithoutBlokInputSchema';

export const BlokFollowersCreateOrConnectWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersCreateOrConnectWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default BlokFollowersCreateOrConnectWithoutBlokInputSchema;
