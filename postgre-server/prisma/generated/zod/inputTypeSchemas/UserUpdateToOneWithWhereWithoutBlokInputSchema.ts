import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutBlokInputSchema } from './UserUpdateWithoutBlokInputSchema';
import { UserUncheckedUpdateWithoutBlokInputSchema } from './UserUncheckedUpdateWithoutBlokInputSchema';

export const UserUpdateToOneWithWhereWithoutBlokInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBlokInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBlokInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutBlokInputSchema;
