import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutBloksDocumentInputSchema } from './DocumentCreateNestedOneWithoutBloksDocumentInputSchema';

export const BloksDocumentCreateWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentCreateWithoutBlokInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutBloksDocumentInputSchema)
}).strict();

export default BloksDocumentCreateWithoutBlokInputSchema;
