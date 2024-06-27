import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentMetadataWhereInputSchema: z.ZodType<Prisma.DocumentMetadataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DocumentMetadataWhereInputSchema),z.lazy(() => DocumentMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentMetadataWhereInputSchema),z.lazy(() => DocumentMetadataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict();

export default DocumentMetadataWhereInputSchema;
