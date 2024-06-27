import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DocumentMetadataCountOrderByAggregateInputSchema } from './DocumentMetadataCountOrderByAggregateInputSchema';
import { DocumentMetadataMaxOrderByAggregateInputSchema } from './DocumentMetadataMaxOrderByAggregateInputSchema';
import { DocumentMetadataMinOrderByAggregateInputSchema } from './DocumentMetadataMinOrderByAggregateInputSchema';

export const DocumentMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocumentMetadataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  documentType: z.lazy(() => SortOrderSchema).optional(),
  url: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DocumentMetadataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocumentMetadataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocumentMetadataMinOrderByAggregateInputSchema).optional()
}).strict();

export default DocumentMetadataOrderByWithAggregationInputSchema;
