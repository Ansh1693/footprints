import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const UserAuthNullableRelationFilterSchema: z.ZodType<Prisma.UserAuthNullableRelationFilter> = z.object({
  is: z.lazy(() => UserAuthWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserAuthWhereInputSchema).optional().nullable()
}).strict();

export default UserAuthNullableRelationFilterSchema;
