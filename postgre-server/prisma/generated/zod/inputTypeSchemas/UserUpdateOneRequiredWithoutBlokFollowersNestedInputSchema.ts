import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBlokFollowersInputSchema } from './UserCreateWithoutBlokFollowersInputSchema';
import { UserUncheckedCreateWithoutBlokFollowersInputSchema } from './UserUncheckedCreateWithoutBlokFollowersInputSchema';
import { UserCreateOrConnectWithoutBlokFollowersInputSchema } from './UserCreateOrConnectWithoutBlokFollowersInputSchema';
import { UserUpsertWithoutBlokFollowersInputSchema } from './UserUpsertWithoutBlokFollowersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBlokFollowersInputSchema } from './UserUpdateToOneWithWhereWithoutBlokFollowersInputSchema';
import { UserUpdateWithoutBlokFollowersInputSchema } from './UserUpdateWithoutBlokFollowersInputSchema';
import { UserUncheckedUpdateWithoutBlokFollowersInputSchema } from './UserUncheckedUpdateWithoutBlokFollowersInputSchema';

export const UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlokFollowersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlokFollowersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlokFollowersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBlokFollowersInputSchema),z.lazy(() => UserUpdateWithoutBlokFollowersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokFollowersInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema;
