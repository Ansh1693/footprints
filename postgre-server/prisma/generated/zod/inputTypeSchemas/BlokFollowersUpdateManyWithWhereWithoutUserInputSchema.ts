import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersScalarWhereInputSchema } from './BlokFollowersScalarWhereInputSchema';
import { BlokFollowersUpdateManyMutationInputSchema } from './BlokFollowersUpdateManyMutationInputSchema';
import { BlokFollowersUncheckedUpdateManyWithoutUserInputSchema } from './BlokFollowersUncheckedUpdateManyWithoutUserInputSchema';

export const BlokFollowersUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BlokFollowersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlokFollowersUpdateManyMutationInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default BlokFollowersUpdateManyWithWhereWithoutUserInputSchema;
