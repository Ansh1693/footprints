import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutDocumentInputSchema } from './UserCreateWithoutDocumentInputSchema';
import { UserUncheckedCreateWithoutDocumentInputSchema } from './UserUncheckedCreateWithoutDocumentInputSchema';

export const UserCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutDocumentInputSchema;
