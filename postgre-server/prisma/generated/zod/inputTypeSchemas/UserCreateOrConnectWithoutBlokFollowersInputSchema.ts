import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBlokFollowersInputSchema } from './UserCreateWithoutBlokFollowersInputSchema';
import { UserUncheckedCreateWithoutBlokFollowersInputSchema } from './UserUncheckedCreateWithoutBlokFollowersInputSchema';

export const UserCreateOrConnectWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlokFollowersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokFollowersInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBlokFollowersInputSchema;
