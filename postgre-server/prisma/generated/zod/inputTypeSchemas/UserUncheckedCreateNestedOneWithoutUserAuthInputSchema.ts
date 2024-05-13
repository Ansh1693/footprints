import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserAuthInputSchema } from './UserCreateWithoutUserAuthInputSchema';
import { UserUncheckedCreateWithoutUserAuthInputSchema } from './UserUncheckedCreateWithoutUserAuthInputSchema';
import { UserCreateOrConnectWithoutUserAuthInputSchema } from './UserCreateOrConnectWithoutUserAuthInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserUncheckedCreateNestedOneWithoutUserAuthInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutUserAuthInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserAuthInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAuthInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserUncheckedCreateNestedOneWithoutUserAuthInputSchema;
