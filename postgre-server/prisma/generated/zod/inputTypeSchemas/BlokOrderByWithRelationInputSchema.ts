import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { BloksDocumentOrderByRelationAggregateInputSchema } from './BloksDocumentOrderByRelationAggregateInputSchema';
import { BlokMetadataOrderByWithRelationInputSchema } from './BlokMetadataOrderByWithRelationInputSchema';
import { BlokFollowersOrderByRelationAggregateInputSchema } from './BlokFollowersOrderByRelationAggregateInputSchema';

export const BlokOrderByWithRelationInputSchema: z.ZodType<Prisma.BlokOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  blokName: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentOrderByRelationAggregateInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataOrderByWithRelationInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BlokOrderByWithRelationInputSchema;
