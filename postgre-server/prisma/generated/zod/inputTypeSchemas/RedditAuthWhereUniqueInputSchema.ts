import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAuthRelationFilterSchema } from './UserAuthRelationFilterSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const RedditAuthWhereUniqueInputSchema: z.ZodType<Prisma.RedditAuthWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => RedditAuthWhereInputSchema),z.lazy(() => RedditAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditAuthWhereInputSchema),z.lazy(() => RedditAuthWhereInputSchema).array() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  redditId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  redditUsername: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserAuth: z.union([ z.lazy(() => UserAuthRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional(),
}).strict());

export default RedditAuthWhereUniqueInputSchema;
