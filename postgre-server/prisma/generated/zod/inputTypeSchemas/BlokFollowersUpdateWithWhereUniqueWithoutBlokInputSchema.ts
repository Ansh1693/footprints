import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersWhereUniqueInputSchema } from './BlokFollowersWhereUniqueInputSchema';
import { BlokFollowersUpdateWithoutBlokInputSchema } from './BlokFollowersUpdateWithoutBlokInputSchema';
import { BlokFollowersUncheckedUpdateWithoutBlokInputSchema } from './BlokFollowersUncheckedUpdateWithoutBlokInputSchema';

export const BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUpdateWithWhereUniqueWithoutBlokInput> = z.object({
  where: z.lazy(() => BlokFollowersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlokFollowersUpdateWithoutBlokInputSchema),z.lazy(() => BlokFollowersUncheckedUpdateWithoutBlokInputSchema) ]),
}).strict();

export default BlokFollowersUpdateWithWhereUniqueWithoutBlokInputSchema;
