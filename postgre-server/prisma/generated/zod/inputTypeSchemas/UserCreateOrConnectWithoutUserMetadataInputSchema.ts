import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserMetadataInputSchema } from './UserCreateWithoutUserMetadataInputSchema';
import { UserUncheckedCreateWithoutUserMetadataInputSchema } from './UserUncheckedCreateWithoutUserMetadataInputSchema';

export const UserCreateOrConnectWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserMetadataInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserMetadataInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutUserMetadataInputSchema;
