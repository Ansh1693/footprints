import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutRedditAuthInputSchema } from './UserAuthCreateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedCreateWithoutRedditAuthInputSchema } from './UserAuthUncheckedCreateWithoutRedditAuthInputSchema';
import { UserAuthCreateOrConnectWithoutRedditAuthInputSchema } from './UserAuthCreateOrConnectWithoutRedditAuthInputSchema';
import { UserAuthUpsertWithoutRedditAuthInputSchema } from './UserAuthUpsertWithoutRedditAuthInputSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthUpdateToOneWithWhereWithoutRedditAuthInputSchema } from './UserAuthUpdateToOneWithWhereWithoutRedditAuthInputSchema';
import { UserAuthUpdateWithoutRedditAuthInputSchema } from './UserAuthUpdateWithoutRedditAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutRedditAuthInputSchema } from './UserAuthUncheckedUpdateWithoutRedditAuthInputSchema';

export const UserAuthUpdateOneWithoutRedditAuthNestedInputSchema: z.ZodType<Prisma.UserAuthUpdateOneWithoutRedditAuthNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutRedditAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutRedditAuthInputSchema).optional(),
  upsert: z.lazy(() => UserAuthUpsertWithoutRedditAuthInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAuthUpdateToOneWithWhereWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUpdateWithoutRedditAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutRedditAuthInputSchema) ]).optional(),
}).strict();

export default UserAuthUpdateOneWithoutRedditAuthNestedInputSchema;
