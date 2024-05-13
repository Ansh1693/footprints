import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { BlokUpdateWithoutBlokFollowersInputSchema } from './BlokUpdateWithoutBlokFollowersInputSchema';
import { BlokUncheckedUpdateWithoutBlokFollowersInputSchema } from './BlokUncheckedUpdateWithoutBlokFollowersInputSchema';

export const BlokUpdateToOneWithWhereWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokUpdateToOneWithWhereWithoutBlokFollowersInput> = z.object({
  where: z.lazy(() => BlokWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlokUpdateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokFollowersInputSchema) ]),
}).strict();

export default BlokUpdateToOneWithWhereWithoutBlokFollowersInputSchema;
