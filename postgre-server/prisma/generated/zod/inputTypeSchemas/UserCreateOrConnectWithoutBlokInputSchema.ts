import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutBlokInputSchema } from './UserCreateWithoutBlokInputSchema';
import { UserUncheckedCreateWithoutBlokInputSchema } from './UserUncheckedCreateWithoutBlokInputSchema';

export const UserCreateOrConnectWithoutBlokInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBlokInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBlokInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutBlokInputSchema;
