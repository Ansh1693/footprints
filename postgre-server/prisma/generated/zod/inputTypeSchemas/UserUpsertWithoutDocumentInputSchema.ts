import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutDocumentInputSchema } from './UserUpdateWithoutDocumentInputSchema';
import { UserUncheckedUpdateWithoutDocumentInputSchema } from './UserUncheckedUpdateWithoutDocumentInputSchema';
import { UserCreateWithoutDocumentInputSchema } from './UserCreateWithoutDocumentInputSchema';
import { UserUncheckedCreateWithoutDocumentInputSchema } from './UserUncheckedCreateWithoutDocumentInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutDocumentInputSchema: z.ZodType<Prisma.UserUpsertWithoutDocumentInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedCreateWithoutDocumentInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutDocumentInputSchema;
