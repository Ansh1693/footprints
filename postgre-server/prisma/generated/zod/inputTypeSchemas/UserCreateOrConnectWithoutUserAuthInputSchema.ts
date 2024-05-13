import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserAuthInputSchema } from './UserCreateWithoutUserAuthInputSchema';
import { UserUncheckedCreateWithoutUserAuthInputSchema } from './UserUncheckedCreateWithoutUserAuthInputSchema';

export const UserCreateOrConnectWithoutUserAuthInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserAuthInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserAuthInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUserAuthInputSchema;
