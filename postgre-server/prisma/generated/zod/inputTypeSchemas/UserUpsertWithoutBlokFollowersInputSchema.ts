import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutBlokFollowersInputSchema } from './UserUpdateWithoutBlokFollowersInputSchema';
import { UserUncheckedUpdateWithoutBlokFollowersInputSchema } from './UserUncheckedUpdateWithoutBlokFollowersInputSchema';
import { UserCreateWithoutBlokFollowersInputSchema } from './UserCreateWithoutBlokFollowersInputSchema';
import { UserUncheckedCreateWithoutBlokFollowersInputSchema } from './UserUncheckedCreateWithoutBlokFollowersInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserUpsertWithoutBlokFollowersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokFollowersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokFollowersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutBlokFollowersInputSchema;
