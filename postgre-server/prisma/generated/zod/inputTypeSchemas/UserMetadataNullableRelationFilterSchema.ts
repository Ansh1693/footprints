import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';

export const UserMetadataNullableRelationFilterSchema: z.ZodType<Prisma.UserMetadataNullableRelationFilter> = z.object({
  is: z.lazy(() => UserMetadataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserMetadataWhereInputSchema).optional().nullable()
}).strict();

export default UserMetadataNullableRelationFilterSchema;
