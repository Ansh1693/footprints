import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutDocumentInputSchema } from './UserUpdateWithoutDocumentInputSchema';
import { UserUncheckedUpdateWithoutDocumentInputSchema } from './UserUncheckedUpdateWithoutDocumentInputSchema';

export const UserUpdateToOneWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutDocumentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutDocumentInputSchema;
