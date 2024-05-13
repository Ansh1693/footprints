import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { CommentsOrderByRelationAggregateInputSchema } from './CommentsOrderByRelationAggregateInputSchema';
import { DocumentMetadataOrderByWithRelationInputSchema } from './DocumentMetadataOrderByWithRelationInputSchema';
import { RedditDataOrderByWithRelationInputSchema } from './RedditDataOrderByWithRelationInputSchema';
import { PinterestDataOrderByWithRelationInputSchema } from './PinterestDataOrderByWithRelationInputSchema';
import { TagsDocumentOrderByRelationAggregateInputSchema } from './TagsDocumentOrderByRelationAggregateInputSchema';
import { BloksDocumentOrderByRelationAggregateInputSchema } from './BloksDocumentOrderByRelationAggregateInputSchema';

export const DocumentOrderByWithRelationInputSchema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  heading: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  body: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  Status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  Comments: z.lazy(() => CommentsOrderByRelationAggregateInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataOrderByWithRelationInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataOrderByWithRelationInputSchema).optional(),
  PinterestData: z.lazy(() => PinterestDataOrderByWithRelationInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentOrderByRelationAggregateInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentOrderByRelationAggregateInputSchema).optional()
}).strict();

export default DocumentOrderByWithRelationInputSchema;
