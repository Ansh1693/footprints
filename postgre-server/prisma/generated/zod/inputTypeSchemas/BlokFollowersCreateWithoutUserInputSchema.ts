import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateNestedOneWithoutBlokFollowersInputSchema } from './BlokCreateNestedOneWithoutBlokFollowersInputSchema';

export const BlokFollowersCreateWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersCreateWithoutUserInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Blok: z.lazy(() => BlokCreateNestedOneWithoutBlokFollowersInputSchema)
}).strict();

export default BlokFollowersCreateWithoutUserInputSchema;
