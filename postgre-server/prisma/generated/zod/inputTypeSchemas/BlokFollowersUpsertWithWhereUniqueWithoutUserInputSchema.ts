import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithoutUserInputSchema } from './BlokFollowersUpdateWithoutUserInputSchema';
import { BlokFollowersUncheckedUpdateWithoutUserInputSchema } from './BlokFollowersUncheckedUpdateWithoutUserInputSchema';
import { BlokFollowersCreateWithoutUserInputSchema } from './BlokFollowersCreateWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateWithoutUserInputSchema } from './BlokFollowersUncheckedCreateWithoutUserInputSchema';

export const BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlokFollowersUpdateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BlokFollowersUpsertWithWhereUniqueWithoutUserInputSchema;
