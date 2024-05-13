import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDocumentInputSchema } from './UserCreateWithoutDocumentInputSchema';
import { UserUncheckedCreateWithoutDocumentInputSchema } from './UserUncheckedCreateWithoutDocumentInputSchema';
import { UserCreateOrConnectWithoutDocumentInputSchema } from './UserCreateOrConnectWithoutDocumentInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutDocumentInputSchema;
