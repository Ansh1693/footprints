import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBlokFollowersInputSchema } from './UserUpdateWithoutBlokFollowersInputSchema';
import { UserUncheckedUpdateWithoutBlokFollowersInputSchema } from './UserUncheckedUpdateWithoutBlokFollowersInputSchema';

export const UserUpdateToOneWithWhereWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlokFollowersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokFollowersInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBlokFollowersInputSchema;
