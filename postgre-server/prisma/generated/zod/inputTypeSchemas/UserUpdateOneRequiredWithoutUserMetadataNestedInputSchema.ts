import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserMetadataInputSchema } from './UserCreateWithoutUserMetadataInputSchema';
import { UserUncheckedCreateWithoutUserMetadataInputSchema } from './UserUncheckedCreateWithoutUserMetadataInputSchema';
import { UserCreateOrConnectWithoutUserMetadataInputSchema } from './UserCreateOrConnectWithoutUserMetadataInputSchema';
import { UserUpsertWithoutUserMetadataInputSchema } from './UserUpsertWithoutUserMetadataInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserMetadataInputSchema } from './UserUpdateToOneWithWhereWithoutUserMetadataInputSchema';
import { UserUpdateWithoutUserMetadataInputSchema } from './UserUpdateWithoutUserMetadataInputSchema';
import { UserUncheckedUpdateWithoutUserMetadataInputSchema } from './UserUncheckedUpdateWithoutUserMetadataInputSchema';

export const UserUpdateOneRequiredWithoutUserMetadataNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserMetadataNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserMetadataInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserMetadataInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserMetadataInputSchema),z.lazy(() => UserUpdateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserMetadataInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutUserMetadataNestedInputSchema;
