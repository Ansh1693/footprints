import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema } from './BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema';
import { DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema } from './DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema';

export const BloksDocumentUpdateInputSchema: z.ZodType<Prisma.BloksDocumentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Blok: z.lazy(() => BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema).optional()
}).strict();

export default BloksDocumentUpdateInputSchema;
