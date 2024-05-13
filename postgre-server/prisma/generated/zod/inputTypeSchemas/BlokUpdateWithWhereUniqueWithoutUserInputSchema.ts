import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateWithoutUserInputSchema } from './BlokUpdateWithoutUserInputSchema';
import { BlokUncheckedUpdateWithoutUserInputSchema } from './BlokUncheckedUpdateWithoutUserInputSchema';

export const BlokUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BlokUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BlokUpdateWithoutUserInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default BlokUpdateWithWhereUniqueWithoutUserInputSchema;
