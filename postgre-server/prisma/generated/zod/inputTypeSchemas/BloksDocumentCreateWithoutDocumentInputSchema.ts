import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateNestedOneWithoutBloksDocumentInputSchema } from './BlokCreateNestedOneWithoutBloksDocumentInputSchema';

export const BloksDocumentCreateWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentCreateWithoutDocumentInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Blok: z.lazy(() => BlokCreateNestedOneWithoutBloksDocumentInputSchema)
}).strict();

export default BloksDocumentCreateWithoutDocumentInputSchema;
