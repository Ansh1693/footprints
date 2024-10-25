import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserMetadataInputSchema } from './UserCreateWithoutUserMetadataInputSchema';
import { UserUncheckedCreateWithoutUserMetadataInputSchema } from './UserUncheckedCreateWithoutUserMetadataInputSchema';
import { UserCreateOrConnectWithoutUserMetadataInputSchema } from './UserCreateOrConnectWithoutUserMetadataInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserMetadataInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUserMetadataInputSchema),z.lazy(() => UserUncheckedCreateWithoutUserMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserMetadataInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutUserMetadataInputSchema;
