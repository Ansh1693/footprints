import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BlokOrderByWithRelationInputSchema } from './BlokOrderByWithRelationInputSchema';
import { DocumentOrderByWithRelationInputSchema } from './DocumentOrderByWithRelationInputSchema';

export const BloksDocumentOrderByWithRelationInputSchema: z.ZodType<Prisma.BloksDocumentOrderByWithRelationInput> = z.object({
  blokId: z.lazy(() => SortOrderSchema).optional(),
  documentId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Blok: z.lazy(() => BlokOrderByWithRelationInputSchema).optional(),
  Document: z.lazy(() => DocumentOrderByWithRelationInputSchema).optional()
}).strict();

export default BloksDocumentOrderByWithRelationInputSchema;
