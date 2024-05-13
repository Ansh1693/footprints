import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BlokMetadataCountOrderByAggregateInputSchema } from './BlokMetadataCountOrderByAggregateInputSchema';
import { BlokMetadataMaxOrderByAggregateInputSchema } from './BlokMetadataMaxOrderByAggregateInputSchema';
import { BlokMetadataMinOrderByAggregateInputSchema } from './BlokMetadataMinOrderByAggregateInputSchema';

export const BlokMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.BlokMetadataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  blokHeader: z.lazy(() => SortOrderSchema).optional(),
  blokId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BlokMetadataCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BlokMetadataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BlokMetadataMinOrderByAggregateInputSchema).optional()
}).strict();

export default BlokMetadataOrderByWithAggregationInputSchema;
