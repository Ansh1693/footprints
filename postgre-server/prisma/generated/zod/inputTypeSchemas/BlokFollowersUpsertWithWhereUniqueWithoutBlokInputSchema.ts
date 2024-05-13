import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithoutBlokInputSchema } from './BlokFollowersUpdateWithoutBlokInputSchema';
import { BlokFollowersUncheckedUpdateWithoutBlokInputSchema } from './BlokFollowersUncheckedUpdateWithoutBlokInputSchema';
import { BlokFollowersCreateWithoutBlokInputSchema } from './BlokFollowersCreateWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateWithoutBlokInputSchema';

export const BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUpsertWithWhereUniqueWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlokFollowersUpdateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateWithoutBlokInputSchema) ]),
  create: z.union([ z.lazy(() => BlokFollowersCreateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default BlokFollowersUpsertWithWhereUniqueWithoutBlokInputSchema;
