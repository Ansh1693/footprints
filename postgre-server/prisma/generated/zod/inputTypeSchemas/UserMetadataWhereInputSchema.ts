import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserMetadataWhereInputSchema: z.ZodType<Prisma.UserMetadataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserMetadataWhereInputSchema),z.lazy(() => UserMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserMetadataWhereInputSchema),z.lazy(() => UserMetadataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileImage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profileBanner: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export default UserMetadataWhereInputSchema;
