import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthCreateWithoutUserInputSchema } from './UserAuthCreateWithoutUserInputSchema';
import { UserAuthUncheckedCreateWithoutUserInputSchema } from './UserAuthUncheckedCreateWithoutUserInputSchema';

export const UserAuthCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserAuthCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserAuthWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserAuthCreateOrConnectWithoutUserInputSchema;
