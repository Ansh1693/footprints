import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { BloksDocumentListRelationFilterSchema } from './BloksDocumentListRelationFilterSchema';
import { BlokMetadataNullableRelationFilterSchema } from './BlokMetadataNullableRelationFilterSchema';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';
import { BlokFollowersListRelationFilterSchema } from './BlokFollowersListRelationFilterSchema';

export const BlokWhereUniqueInputSchema: z.ZodType<Prisma.BlokWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BlokWhereInputSchema),z.lazy(() => BlokWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokWhereInputSchema),z.lazy(() => BlokWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  blokName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  public: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  deleted: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  BloksDocument: z.lazy(() => BloksDocumentListRelationFilterSchema).optional(),
  BlokMetadata: z.union([ z.lazy(() => BlokMetadataNullableRelationFilterSchema),z.lazy(() => BlokMetadataWhereInputSchema) ]).optional().nullable(),
  BlokFollowers: z.lazy(() => BlokFollowersListRelationFilterSchema).optional()
}).strict());

export default BlokWhereUniqueInputSchema;
