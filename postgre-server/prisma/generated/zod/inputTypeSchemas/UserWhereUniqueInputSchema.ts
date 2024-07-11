import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
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

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string(),
    username: z.string(),
    profileId: z.string().cuid()
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
    username: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
    profileId: z.string().cuid(),
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    username: z.string(),
    profileId: z.string().cuid(),
  }),
  z.object({
    id: z.string().cuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    profileId: z.string().cuid(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
    username: z.string(),
    profileId: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
    username: z.string(),
  }),
  z.object({
    email: z.string(),
    profileId: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    username: z.string(),
    profileId: z.string().cuid(),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    profileId: z.string().cuid(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  username: z.string().optional(),
  profileId: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  UserMetadata: z.union([ z.lazy(() => UserMetadataNullableRelationFilterSchema),z.lazy(() => UserMetadataWhereInputSchema) ]).optional().nullable(),
  UserAuth: z.union([ z.lazy(() => UserAuthNullableRelationFilterSchema),z.lazy(() => UserAuthWhereInputSchema) ]).optional().nullable(),
  Document: z.lazy(() => DocumentListRelationFilterSchema).optional(),
  Comments: z.lazy(() => CommentsListRelationFilterSchema).optional(),
  Tags: z.lazy(() => TagListRelationFilterSchema).optional(),
  Blok: z.lazy(() => BlokListRelationFilterSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
