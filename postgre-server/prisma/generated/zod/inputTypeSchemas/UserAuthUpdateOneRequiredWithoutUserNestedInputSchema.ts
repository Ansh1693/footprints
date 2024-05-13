import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutUserInputSchema } from './UserAuthCreateWithoutUserInputSchema';
import { UserAuthUncheckedCreateWithoutUserInputSchema } from './UserAuthUncheckedCreateWithoutUserInputSchema';
import { UserAuthCreateOrConnectWithoutUserInputSchema } from './UserAuthCreateOrConnectWithoutUserInputSchema';
import { UserAuthUpsertWithoutUserInputSchema } from './UserAuthUpsertWithoutUserInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthUpdateToOneWithWhereWithoutUserInputSchema } from './UserAuthUpdateToOneWithWhereWithoutUserInputSchema';
import { UserAuthUpdateWithoutUserInputSchema } from './UserAuthUpdateWithoutUserInputSchema';
import { UserAuthUncheckedUpdateWithoutUserInputSchema } from './UserAuthUncheckedUpdateWithoutUserInputSchema';

export const UserAuthUpdateOneRequiredWithoutUserNestedInputSchema: z.ZodType<Prisma.UserAuthUpdateOneRequiredWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserAuthUpsertWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAuthUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => UserAuthUpdateWithoutUserInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default UserAuthUpdateOneRequiredWithoutUserNestedInputSchema;
