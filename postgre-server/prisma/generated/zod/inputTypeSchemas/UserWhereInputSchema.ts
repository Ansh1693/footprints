import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserMetadataNullableRelationFilterSchema } from './UserMetadataNullableRelationFilterSchema';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';
import { UserAuthNullableRelationFilterSchema } from './UserAuthNullableRelationFilterSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { DocumentListRelationFilterSchema } from './DocumentListRelationFilterSchema';
import { CommentsListRelationFilterSchema } from './CommentsListRelationFilterSchema';
import { TagListRelationFilterSchema } from './TagListRelationFilterSchema';
import { BlokListRelationFilterSchema } from './BlokListRelationFilterSchema';
import { BlokFollowersListRelationFilterSchema } from './BlokFollowersListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserMetadata: z.union([ z.lazy(() => UserMetadataNullableRelationFilterSchema),z.lazy(() => UserMetadataWhereInputSchema) ]).optional().nullable(),
  UserAuth: z.union([ z.lazy(() => UserAuthNullableRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional().nullable(),
  Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
  Comments: z.lazy(() => CommentsListRelationFilterSchema).optional(),
  Tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  Blok: z.lazy(() => BlokListRelationFilterSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
