import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BlokRelationFilterSchema } from './BlokRelationFilterSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const BloksDocumentWhereInputSchema: z.ZodType<Prisma.BloksDocumentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BloksDocumentWhereInputSchema),z.lazy(() => BloksDocumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BloksDocumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BloksDocumentWhereInputSchema),z.lazy(() => BloksDocumentWhereInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Blok: z.union([ z.lazy(() => BlokRelationFilterSchema),z.lazy(() => BlokWhereInputSchema) ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict();

export default BloksDocumentWhereInputSchema;
