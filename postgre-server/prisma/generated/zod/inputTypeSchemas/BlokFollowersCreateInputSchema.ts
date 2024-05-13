import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateNestedOneWithoutBlokFollowersInputSchema } from './BlokCreateNestedOneWithoutBlokFollowersInputSchema';
import { UserCreateNestedOneWithoutBlokFollowersInputSchema } from './UserCreateNestedOneWithoutBlokFollowersInputSchema';

export const BlokFollowersCreateInputSchema: z.ZodType<Prisma.BlokFollowersCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Blok: z.lazy(() => BlokCreateNestedOneWithoutBlokFollowersInputSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutBlokFollowersInputSchema)
}).strict();

export default BlokFollowersCreateInputSchema;
