import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';

export const UserMetadataRelationFilterSchema: z.ZodType<Prisma.UserMetadataRelationFilter> = z.object({
  is: z.lazy(() => UserMetadataWhereInputSchema).optional(),
  isNot: z.lazy(() => UserMetadataWhereInputSchema).optional()
}).strict();

export default UserMetadataRelationFilterSchema;
