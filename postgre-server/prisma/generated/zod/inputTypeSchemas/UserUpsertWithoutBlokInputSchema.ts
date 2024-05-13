import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutBlokInputSchema } from './UserUpdateWithoutBlokInputSchema';
import { UserUncheckedUpdateWithoutBlokInputSchema } from './UserUncheckedUpdateWithoutBlokInputSchema';
import { UserCreateWithoutBlokInputSchema } from './UserCreateWithoutBlokInputSchema';
import { UserUncheckedCreateWithoutBlokInputSchema } from './UserUncheckedCreateWithoutBlokInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutBlokInputSchema: z.ZodType<Prisma.UserUpsertWithoutBlokInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBlokInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBlokInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutBlokInputSchema;
