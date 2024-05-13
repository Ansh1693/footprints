import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutBlokFollowersInputSchema } from './UserCreateNestedOneWithoutBlokFollowersInputSchema';

export const BlokFollowersCreateWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersCreateWithoutBlokInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBlokFollowersInputSchema)
}).strict();

export default BlokFollowersCreateWithoutBlokInputSchema;
