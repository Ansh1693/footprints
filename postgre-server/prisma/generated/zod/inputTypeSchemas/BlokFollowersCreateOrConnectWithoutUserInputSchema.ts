import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersCreateWithoutUserInputSchema } from './BlokFollowersCreateWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateWithoutUserInputSchema } from './BlokFollowersUncheckedCreateWithoutUserInputSchema';

export const BlokFollowersCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BlokFollowersCreateOrConnectWithoutUserInputSchema;
