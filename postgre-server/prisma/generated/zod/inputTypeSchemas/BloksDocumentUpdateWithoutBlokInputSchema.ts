import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema } from './DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema';

export const BloksDocumentUpdateWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentUpdateWithoutBlokInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema).optional()
}).strict();

export default BloksDocumentUpdateWithoutBlokInputSchema;
