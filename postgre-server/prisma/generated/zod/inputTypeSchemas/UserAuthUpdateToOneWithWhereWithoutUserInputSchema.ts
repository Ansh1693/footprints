import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { UserAuthUpdateWithoutUserInputSchema } from './UserAuthUpdateWithoutUserInputSchema';
import { UserAuthUncheckedUpdateWithoutUserInputSchema } from './UserAuthUncheckedUpdateWithoutUserInputSchema';

export const UserAuthUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserAuthUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserAuthWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAuthUpdateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default UserAuthUpdateToOneWithWhereWithoutUserInputSchema;
