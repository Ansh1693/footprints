import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserAuthInputSchema } from './UserCreateWithoutUserAuthInputSchema';
import { UserUncheckedCreateWithoutUserAuthInputSchema } from './UserUncheckedCreateWithoutUserAuthInputSchema';
import { UserCreateOrConnectWithoutUserAuthInputSchema } from './UserCreateOrConnectWithoutUserAuthInputSchema';
import { UserUpsertWithoutUserAuthInputSchema } from './UserUpsertWithoutUserAuthInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserAuthInputSchema } from './UserUpdateToOneWithWhereWithoutUserAuthInputSchema';
import { UserUpdateWithoutUserAuthInputSchema } from './UserUpdateWithoutUserAuthInputSchema';
import { UserUncheckedUpdateWithoutUserAuthInputSchema } from './UserUncheckedUpdateWithoutUserAuthInputSchema';

export const UserUpdateOneRequiredWithoutUserAuthNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserAuthNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAuthInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserAuthInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserAuthInputSchema),z.lazy(() => UserUpdateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserAuthInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUserAuthNestedInputSchema;
