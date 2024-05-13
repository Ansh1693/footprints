import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBlokInputSchema } from './UserCreateWithoutBlokInputSchema';
import { UserUncheckedCreateWithoutBlokInputSchema } from './UserUncheckedCreateWithoutBlokInputSchema';
import { UserCreateOrConnectWithoutBlokInputSchema } from './UserCreateOrConnectWithoutBlokInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutBlokInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBlokInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlokInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlokInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutBlokInputSchema;
