import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';

export const GoogleAuthNullableRelationFilterSchema: z.ZodType<Prisma.GoogleAuthNullableRelationFilter> = z.object({
  is: z.lazy(() => GoogleAuthWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GoogleAuthWhereInputSchema).optional().nullable()
}).strict();

export default GoogleAuthNullableRelationFilterSchema;
