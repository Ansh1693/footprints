import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BloksDocumentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BloksDocumentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BloksDocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => BloksDocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BloksDocumentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BloksDocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => BloksDocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BloksDocumentScalarWhereWithAggregatesInputSchema;
