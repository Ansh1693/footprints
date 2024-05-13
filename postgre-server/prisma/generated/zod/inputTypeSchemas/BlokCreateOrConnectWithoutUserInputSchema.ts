import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokCreateWithoutUserInputSchema } from './BlokCreateWithoutUserInputSchema';
import { BlokUncheckedCreateWithoutUserInputSchema } from './BlokUncheckedCreateWithoutUserInputSchema';

export const BlokCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BlokCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokCreateWithoutUserInputSchema),z.lazy(() => BlokUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default BlokCreateOrConnectWithoutUserInputSchema;
