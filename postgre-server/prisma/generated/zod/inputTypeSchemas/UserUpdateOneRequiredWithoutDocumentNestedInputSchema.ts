import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutDocumentInputSchema } from './UserCreateWithoutDocumentInputSchema';
import { UserUncheckedCreateWithoutDocumentInputSchema } from './UserUncheckedCreateWithoutDocumentInputSchema';
import { UserCreateOrConnectWithoutDocumentInputSchema } from './UserCreateOrConnectWithoutDocumentInputSchema';
import { UserUpsertWithoutDocumentInputSchema } from './UserUpsertWithoutDocumentInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutDocumentInputSchema } from './UserUpdateToOneWithWhereWithoutDocumentInputSchema';
import { UserUpdateWithoutDocumentInputSchema } from './UserUpdateWithoutDocumentInputSchema';
import { UserUncheckedUpdateWithoutDocumentInputSchema } from './UserUncheckedUpdateWithoutDocumentInputSchema';

export const UserUpdateOneRequiredWithoutDocumentNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDocumentInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutDocumentInputSchema),z.lazy(() => UserUpdateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDocumentInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutDocumentNestedInputSchema;
