import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentMetadataWhereUniqueInputSchema: z.ZodType<Prisma.DocumentMetadataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    documentId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    documentId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  documentId: z.string().optional(),
  AND: z.union([ z.lazy(() => DocumentMetadataWhereInputSchema),z.lazy(() => DocumentMetadataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocumentMetadataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocumentMetadataWhereInputSchema),z.lazy(() => DocumentMetadataWhereInputSchema).array() ]).optional(),
  documentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict());

export default DocumentMetadataWhereUniqueInputSchema;
