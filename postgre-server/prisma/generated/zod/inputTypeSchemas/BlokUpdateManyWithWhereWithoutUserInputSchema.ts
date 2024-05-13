import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokScalarWhereInputSchema } from './BlokScalarWhereInputSchema';
import { BlokUpdateManyMutationInputSchema } from './BlokUpdateManyMutationInputSchema';
import { BlokUncheckedUpdateManyWithoutUserInputSchema } from './BlokUncheckedUpdateManyWithoutUserInputSchema';

export const BlokUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BlokUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BlokScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BlokUpdateManyMutationInputSchema),z.lazy(() => BlokUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default BlokUpdateManyWithWhereWithoutUserInputSchema;
