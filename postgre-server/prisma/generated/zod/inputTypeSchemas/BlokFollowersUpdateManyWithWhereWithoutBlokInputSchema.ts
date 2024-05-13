import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersScalarWhereInputSchema } from './BlokFollowersScalarWhereInputSchema';
import { BlokFollowersUpdateManyMutationInputSchema } from './BlokFollowersUpdateManyMutationInputSchema';
import { BlokFollowersUncheckedUpdateManyWithoutBlokInputSchema } from './BlokFollowersUncheckedUpdateManyWithoutBlokInputSchema';

export const BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUpdateManyWithWhereWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokFollowersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlokFollowersUpdateManyMutationInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateManyWithoutBlokInputSchema) ]),
}).strict();

export default BlokFollowersUpdateManyWithWhereWithoutBlokInputSchema;
