import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserMetadataWhereUniqueInputSchema: z.ZodType<Prisma.UserMetadataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserMetadataWhereInputSchema),z.lazy(() => UserMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserMetadataWhereInputSchema),z.lazy(() => UserMetadataWhereInputSchema).array() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileBanner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default UserMetadataWhereUniqueInputSchema;
