import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTagsInputSchema } from './UserCreateWithoutTagsInputSchema';
import { UserUncheckedCreateWithoutTagsInputSchema } from './UserUncheckedCreateWithoutTagsInputSchema';
import { UserCreateOrConnectWithoutTagsInputSchema } from './UserCreateOrConnectWithoutTagsInputSchema';
import { UserUpsertWithoutTagsInputSchema } from './UserUpsertWithoutTagsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTagsInputSchema } from './UserUpdateToOneWithWhereWithoutTagsInputSchema';
import { UserUpdateWithoutTagsInputSchema } from './UserUpdateWithoutTagsInputSchema';
import { UserUncheckedUpdateWithoutTagsInputSchema } from './UserUncheckedUpdateWithoutTagsInputSchema';

export const UserUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTagsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => UserUpdateWithoutTagsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutTagsNestedInputSchema;
