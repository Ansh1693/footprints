import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAuthRelationFilterSchema } from './UserAuthRelationFilterSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const GoogleAuthWhereUniqueInputSchema: z.ZodType<Prisma.GoogleAuthWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userAuthId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userAuthId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userAuthId: z.string().optional(),
  AND: z.union([ z.lazy(() => GoogleAuthWhereInputSchema),z.lazy(() => GoogleAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GoogleAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GoogleAuthWhereInputSchema),z.lazy(() => GoogleAuthWhereInputSchema).array() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  googleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserAuth: z.union([ z.lazy(() => UserAuthRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
}).strict());

export default GoogleAuthWhereUniqueInputSchema;
