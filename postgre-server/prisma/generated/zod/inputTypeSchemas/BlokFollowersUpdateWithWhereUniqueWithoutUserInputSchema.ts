import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithoutUserInputSchema } from './BlokFollowersUpdateWithoutUserInputSchema';
import { BlokFollowersUncheckedUpdateWithoutUserInputSchema } from './BlokFollowersUncheckedUpdateWithoutUserInputSchema';

export const BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlokFollowersUpdateWithoutUserInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default BlokFollowersUpdateWithWhereUniqueWithoutUserInputSchema;
