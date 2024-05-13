import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const UserAuthRelationFilterSchema: z.ZodType<Prisma.UserAuthRelationFilter> = z.object({
  is: z.lazy(() => UserAuthWhereInputSchema).optional(),
  isNot: z.lazy(() => UserAuthWhereInputSchema).optional()
}).strict();

export default UserAuthRelationFilterSchema;
