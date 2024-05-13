import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { GoogleAuthNullableRelationFilterSchema } from './GoogleAuthNullableRelationFilterSchema';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';
import { RedditAuthNullableRelationFilterSchema } from './RedditAuthNullableRelationFilterSchema';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';

export const UserAuthWhereUniqueInputSchema: z.ZodType<Prisma.UserAuthWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    GoogleAuthId: z.string(),
    RedditAuthId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    GoogleAuthId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    RedditAuthId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    GoogleAuthId: z.string(),
    RedditAuthId: z.string(),
  }),
  z.object({
    GoogleAuthId: z.string(),
  }),
  z.object({
    RedditAuthId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  GoogleAuthId: z.string().optional(),
  RedditAuthId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserAuthWhereInputSchema),z.lazy(() => UserAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAuthWhereInputSchema),z.lazy(() => UserAuthWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  GoogleAuth: z.union([ z.lazy(() => GoogleAuthNullableRelationFilterSchema),z.lazy(() => GoogleAuthWhereInputSchema) ]).optional().nullable(),
  RedditAuth: z.union([ z.lazy(() => RedditAuthNullableRelationFilterSchema),z.lazy(() => RedditAuthWhereInputSchema) ]).optional().nullable(),
}).strict());

export default UserAuthWhereUniqueInputSchema;
