import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateNestedOneWithoutBloksDocumentInputSchema } from './BlokCreateNestedOneWithoutBloksDocumentInputSchema';
import { DocumentCreateNestedOneWithoutBloksDocumentInputSchema } from './DocumentCreateNestedOneWithoutBloksDocumentInputSchema';

export const BloksDocumentCreateInputSchema: z.ZodType<Prisma.BloksDocumentCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Blok: z.lazy(() => BlokCreateNestedOneWithoutBloksDocumentInputSchema),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutBloksDocumentInputSchema)
}).strict();

export default BloksDocumentCreateInputSchema;
