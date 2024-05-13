import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokUpdateWithoutBlokFollowersInputSchema } from './BlokUpdateWithoutBlokFollowersInputSchema';
import { BlokUncheckedUpdateWithoutBlokFollowersInputSchema } from './BlokUncheckedUpdateWithoutBlokFollowersInputSchema';
import { BlokCreateWithoutBlokFollowersInputSchema } from './BlokCreateWithoutBlokFollowersInputSchema';
import { BlokUncheckedCreateWithoutBlokFollowersInputSchema } from './BlokUncheckedCreateWithoutBlokFollowersInputSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokUpsertWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokUpsertWithoutBlokFollowersInput> = z.object({
  update: z.union([ z.lazy(() => BlokUpdateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokFollowersInputSchema) ]),
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokFollowersInputSchema) ]),
  where: z.lazy(() => BlokWhereInputSchema).optional()
}).strict();

export default BlokUpsertWithoutBlokFollowersInputSchema;
