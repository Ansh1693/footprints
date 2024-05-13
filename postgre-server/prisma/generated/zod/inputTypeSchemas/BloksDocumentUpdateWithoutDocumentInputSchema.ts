import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema } from './BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema';

export const BloksDocumentUpdateWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUpdateWithoutDocumentInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Blok: z.lazy(() => BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema).optional()
}).strict();

export default BloksDocumentUpdateWithoutDocumentInputSchema;
