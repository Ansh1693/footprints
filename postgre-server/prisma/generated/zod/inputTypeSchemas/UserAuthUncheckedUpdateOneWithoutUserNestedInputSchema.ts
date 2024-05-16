import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutUserInputSchema } from './UserAuthCreateWithoutUserInputSchema';
import { UserAuthUncheckedCreateWithoutUserInputSchema } from './UserAuthUncheckedCreateWithoutUserInputSchema';
import { UserAuthCreateOrConnectWithoutUserInputSchema } from './UserAuthCreateOrConnectWithoutUserInputSchema';
import { UserAuthUpsertWithoutUserInputSchema } from './UserAuthUpsertWithoutUserInputSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthUpdateToOneWithWhereWithoutUserInputSchema } from './UserAuthUpdateToOneWithWhereWithoutUserInputSchema';
import { UserAuthUpdateWithoutUserInputSchema } from './UserAuthUpdateWithoutUserInputSchema';
import { UserAuthUncheckedUpdateWithoutUserInputSchema } from './UserAuthUncheckedUpdateWithoutUserInputSchema';

export const UserAuthUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAuthUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserAuthUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAuthUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => UserAuthUpdateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default UserAuthUncheckedUpdateOneWithoutUserNestedInputSchema;
