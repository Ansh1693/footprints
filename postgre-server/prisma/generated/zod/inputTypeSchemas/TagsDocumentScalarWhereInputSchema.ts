import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TagsDocumentScalarWhereInputSchema: z.ZodType<Prisma.TagsDocumentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsDocumentScalarWhereInputSchema),z.lazy(() => TagsDocumentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsDocumentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsDocumentScalarWhereInputSchema),z.lazy(() => TagsDocumentScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default TagsDocumentScalarWhereInputSchema;
