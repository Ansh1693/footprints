import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUserMetadataInputSchema } from './UserUpdateWithoutUserMetadataInputSchema';
import { UserUncheckedUpdateWithoutUserMetadataInputSchema } from './UserUncheckedUpdateWithoutUserMetadataInputSchema';
import { UserCreateWithoutUserMetadataInputSchema } from './UserCreateWithoutUserMetadataInputSchema';
import { UserUncheckedCreateWithoutUserMetadataInputSchema } from './UserUncheckedCreateWithoutUserMetadataInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserMetadataInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserMetadataInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserMetadataInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutUserMetadataInputSchema;
