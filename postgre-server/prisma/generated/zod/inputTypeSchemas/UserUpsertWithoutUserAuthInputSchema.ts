import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUserAuthInputSchema } from './UserUpdateWithoutUserAuthInputSchema';
import { UserUncheckedUpdateWithoutUserAuthInputSchema } from './UserUncheckedUpdateWithoutUserAuthInputSchema';
import { UserCreateWithoutUserAuthInputSchema } from './UserCreateWithoutUserAuthInputSchema';
import { UserUncheckedCreateWithoutUserAuthInputSchema } from './UserUncheckedCreateWithoutUserAuthInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserAuthInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserAuthInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserAuthInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserAuthInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUserAuthInputSchema;
