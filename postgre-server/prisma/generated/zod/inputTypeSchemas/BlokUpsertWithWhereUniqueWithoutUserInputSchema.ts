import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateWithoutUserInputSchema } from './BlokUpdateWithoutUserInputSchema';
import { BlokUncheckedUpdateWithoutUserInputSchema } from './BlokUncheckedUpdateWithoutUserInputSchema';
import { BlokCreateWithoutUserInputSchema } from './BlokCreateWithoutUserInputSchema';
import { BlokUncheckedCreateWithoutUserInputSchema } from './BlokUncheckedCreateWithoutUserInputSchema';

export const BlokUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BlokUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlokUpdateWithoutUserInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BlokCreateWithoutUserInputSchema),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BlokUpsertWithWhereUniqueWithoutUserInputSchema;
