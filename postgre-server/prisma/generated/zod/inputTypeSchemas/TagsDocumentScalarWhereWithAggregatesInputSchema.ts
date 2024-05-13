import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TagsDocumentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagsDocumentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagsDocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsDocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsDocumentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsDocumentScalarWhereWithAggregatesInputSchema),z.lazy(() => TagsDocumentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TagsDocumentScalarWhereWithAggregatesInputSchema;
