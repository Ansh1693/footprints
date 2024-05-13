import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BloksDocumentScalarWhereInputSchema: z.ZodType<Prisma.BloksDocumentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BloksDocumentScalarWhereInputSchema),z.lazy(() => BloksDocumentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BloksDocumentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BloksDocumentScalarWhereInputSchema),z.lazy(() => BloksDocumentScalarWhereInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default BloksDocumentScalarWhereInputSchema;
