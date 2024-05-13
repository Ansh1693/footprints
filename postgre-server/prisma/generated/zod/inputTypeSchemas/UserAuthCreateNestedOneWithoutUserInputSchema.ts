import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutUserInputSchema } from './UserAuthCreateWithoutUserInputSchema';
import { UserAuthUncheckedCreateWithoutUserInputSchema } from './UserAuthUncheckedCreateWithoutUserInputSchema';
import { UserAuthCreateOrConnectWithoutUserInputSchema } from './UserAuthCreateOrConnectWithoutUserInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';

export const UserAuthCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserAuthCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional()
}).strict();

export default UserAuthCreateNestedOneWithoutUserInputSchema;
