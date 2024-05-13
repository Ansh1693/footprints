import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserAuthInputSchema } from './UserUpdateWithoutUserAuthInputSchema';
import { UserUncheckedUpdateWithoutUserAuthInputSchema } from './UserUncheckedUpdateWithoutUserAuthInputSchema';

export const UserUpdateToOneWithWhereWithoutUserAuthInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserAuthInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserAuthInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUserAuthInputSchema;
