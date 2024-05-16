import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAuthRelationFilterSchema } from './UserAuthRelationFilterSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const GoogleAuthWhereInputSchema: z.ZodType<Prisma.GoogleAuthWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GoogleAuthWhereInputSchema),z.lazy(() => GoogleAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleAuthWhereInputSchema),z.lazy(() => GoogleAuthWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userAuthId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  googleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserAuth: z.union([ z.lazy(() => UserAuthRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
}).strict();

export default GoogleAuthWhereInputSchema;
