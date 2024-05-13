import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutRedditAuthInputSchema } from './UserAuthCreateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedCreateWithoutRedditAuthInputSchema } from './UserAuthUncheckedCreateWithoutRedditAuthInputSchema';
import { UserAuthCreateOrConnectWithoutRedditAuthInputSchema } from './UserAuthCreateOrConnectWithoutRedditAuthInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';

export const UserAuthUncheckedCreateNestedOneWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedCreateNestedOneWithoutRedditAuthInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutRedditAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutRedditAuthInputSchema).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional()
}).strict();

export default UserAuthUncheckedCreateNestedOneWithoutRedditAuthInputSchema;
