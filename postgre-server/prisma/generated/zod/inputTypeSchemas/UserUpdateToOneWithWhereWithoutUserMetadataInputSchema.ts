import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserMetadataInputSchema } from './UserUpdateWithoutUserMetadataInputSchema';
import { UserUncheckedUpdateWithoutUserMetadataInputSchema } from './UserUncheckedUpdateWithoutUserMetadataInputSchema';

export const UserUpdateToOneWithWhereWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserMetadataInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUserMetadataInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutUserMetadataInputSchema;
