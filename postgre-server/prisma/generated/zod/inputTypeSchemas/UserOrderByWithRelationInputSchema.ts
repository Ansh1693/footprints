import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserMetadataOrderByWithRelationInputSchema } from './UserMetadataOrderByWithRelationInputSchema';
import { UserAuthOrderByWithRelationInputSchema } from './UserAuthOrderByWithRelationInputSchema';
import { DocumentOrderByRelationAggregateInputSchema } from './DocumentOrderByRelationAggregateInputSchema';
import { CommentsOrderByRelationAggregateInputSchema } from './CommentsOrderByRelationAggregateInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { BlokOrderByRelationAggregateInputSchema } from './BlokOrderByRelationAggregateInputSchema';
import { BlokFollowersOrderByRelationAggregateInputSchema } from './BlokFollowersOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  UserMetadata: z.lazy(() => UserMetadataOrderByWithRelationInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthOrderByWithRelationInputSchema).optional(),
  Document: z.lazy(() => DocumentOrderByRelationAggregateInputSchema).optional(),
  Comments: z.lazy(() => CommentsOrderByRelationAggregateInputSchema).optional(),
  Tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  Blok: z.lazy(() => BlokOrderByRelationAggregateInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
