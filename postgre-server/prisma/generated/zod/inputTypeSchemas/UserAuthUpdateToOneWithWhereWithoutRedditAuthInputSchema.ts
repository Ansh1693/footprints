import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { UserAuthUpdateWithoutRedditAuthInputSchema } from './UserAuthUpdateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutRedditAuthInputSchema } from './UserAuthUncheckedUpdateWithoutRedditAuthInputSchema';

export const UserAuthUpdateToOneWithWhereWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUpdateToOneWithWhereWithoutRedditAuthInput> = z.object({
  where: z.lazy(() => UserAuthWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAuthUpdateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutRedditAuthInputSchema) ]),
}).strict();

export default UserAuthUpdateToOneWithWhereWithoutRedditAuthInputSchema;
