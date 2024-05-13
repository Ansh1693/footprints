import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAuthNullableRelationFilterSchema } from './UserAuthNullableRelationFilterSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const RedditAuthWhereInputSchema: z.ZodType<Prisma.RedditAuthWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RedditAuthWhereInputSchema),z.lazy(() => RedditAuthWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RedditAuthWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RedditAuthWhereInputSchema),z.lazy(() => RedditAuthWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  refreshToken: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  redditId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  redditUsername: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserAuth: z.union([ z.lazy(() => UserAuthNullableRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional().nullable(),
}).strict();

export default RedditAuthWhereInputSchema;
