import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutBlokInputSchema } from './UserCreateWithoutBlokInputSchema';
import { UserUncheckedCreateWithoutBlokInputSchema } from './UserUncheckedCreateWithoutBlokInputSchema';
import { UserCreateOrConnectWithoutBlokInputSchema } from './UserCreateOrConnectWithoutBlokInputSchema';
import { UserUpsertWithoutBlokInputSchema } from './UserUpsertWithoutBlokInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutBlokInputSchema } from './UserUpdateToOneWithWhereWithoutBlokInputSchema';
import { UserUpdateWithoutBlokInputSchema } from './UserUpdateWithoutBlokInputSchema';
import { UserUncheckedUpdateWithoutBlokInputSchema } from './UserUncheckedUpdateWithoutBlokInputSchema';

export const UserUpdateOneRequiredWithoutBlokNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBlokNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBlokInputSchema),z.lazy(() => UserUncheckedCreateWithoutBlokInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBlokInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBlokInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBlokInputSchema),z.lazy(() => UserUpdateWithoutBlokInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBlokInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutBlokNestedInputSchema;
