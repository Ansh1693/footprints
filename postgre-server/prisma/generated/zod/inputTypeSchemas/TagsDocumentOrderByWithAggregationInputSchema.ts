import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TagsDocumentCountOrderByAggregateInputSchema } from './TagsDocumentCountOrderByAggregateInputSchema';
import { TagsDocumentMaxOrderByAggregateInputSchema } from './TagsDocumentMaxOrderByAggregateInputSchema';
import { TagsDocumentMinOrderByAggregateInputSchema } from './TagsDocumentMinOrderByAggregateInputSchema';

export const TagsDocumentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagsDocumentOrderByWithAggregationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagsDocumentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagsDocumentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagsDocumentMinOrderByAggregateInputSchema).optional()
}).strict();

export default TagsDocumentOrderByWithAggregationInputSchema;
