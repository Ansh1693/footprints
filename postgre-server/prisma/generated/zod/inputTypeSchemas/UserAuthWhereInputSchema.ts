import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { GoogleAuthNullableRelationFilterSchema } from './GoogleAuthNullableRelationFilterSchema';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';
import { RedditAuthNullableRelationFilterSchema } from './RedditAuthNullableRelationFilterSchema';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';

export const UserAuthWhereInputSchema: z.ZodType<Prisma.UserAuthWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserAuthWhereInputSchema),z.lazy(() => UserAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAuthWhereInputSchema),z.lazy(() => UserAuthWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  GoogleAuth: z.union([ z.lazy(() => GoogleAuthNullableRelationFilterSchema),z.lazy(() => GoogleAuthWhereInputSchema) ]).optional().nullable(),
  RedditAuth: z.union([ z.lazy(() => RedditAuthNullableRelationFilterSchema),z.lazy(() => RedditAuthWhereInputSchema) ]).optional().nullable(),
}).strict();

export default UserAuthWhereInputSchema;
