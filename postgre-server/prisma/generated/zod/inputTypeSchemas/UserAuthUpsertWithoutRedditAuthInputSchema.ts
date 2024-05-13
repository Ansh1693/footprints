import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUpdateWithoutRedditAuthInputSchema } from './UserAuthUpdateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutRedditAuthInputSchema } from './UserAuthUncheckedUpdateWithoutRedditAuthInputSchema';
import { UserAuthCreateWithoutRedditAuthInputSchema } from './UserAuthCreateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedCreateWithoutRedditAuthInputSchema } from './UserAuthUncheckedCreateWithoutRedditAuthInputSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const UserAuthUpsertWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUpsertWithoutRedditAuthInput> = z.object({
  update: z.union([ z.lazy(() => UserAuthUpdateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutRedditAuthInputSchema) ]),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutRedditAuthInputSchema) ]),
  where: z.lazy(() => UserAuthWhereInputSchema).optional()
}).strict();

export default UserAuthUpsertWithoutRedditAuthInputSchema;
