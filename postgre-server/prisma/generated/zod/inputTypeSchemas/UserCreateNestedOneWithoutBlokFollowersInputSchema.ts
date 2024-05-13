import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBlokFollowersInputSchema } from './UserCreateWithoutBlokFollowersInputSchema';
import { UserUncheckedCreateWithoutBlokFollowersInputSchema } from './UserUncheckedCreateWithoutBlokFollowersInputSchema';
import { UserCreateOrConnectWithoutBlokFollowersInputSchema } from './UserCreateOrConnectWithoutBlokFollowersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlokFollowersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlokFollowersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBlokFollowersInputSchema;
