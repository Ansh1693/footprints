import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthCreateWithoutRedditAuthInputSchema } from './UserAuthCreateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedCreateWithoutRedditAuthInputSchema } from './UserAuthUncheckedCreateWithoutRedditAuthInputSchema';

export const UserAuthCreateOrConnectWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthCreateOrConnectWithoutRedditAuthInput> = z.object({
  where: z.lazy(() => UserAuthWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutRedditAuthInputSchema) ]),
}).strict();

export default UserAuthCreateOrConnectWithoutRedditAuthInputSchema;
