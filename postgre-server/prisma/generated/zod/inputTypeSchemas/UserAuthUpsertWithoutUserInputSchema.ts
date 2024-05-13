import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUpdateWithoutUserInputSchema } from './UserAuthUpdateWithoutUserInputSchema';
import { UserAuthUncheckedUpdateWithoutUserInputSchema } from './UserAuthUncheckedUpdateWithoutUserInputSchema';
import { UserAuthCreateWithoutUserInputSchema } from './UserAuthCreateWithoutUserInputSchema';
import { UserAuthUncheckedCreateWithoutUserInputSchema } from './UserAuthUncheckedCreateWithoutUserInputSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const UserAuthUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserAuthUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => UserAuthUpdateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => UserAuthWhereInputSchema).optional()
}).strict();

export default UserAuthUpsertWithoutUserInputSchema;
