import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema } from './DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema';

export const TagsDocumentUpdateWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentUpdateWithoutTagInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema).optional()
}).strict();

export default TagsDocumentUpdateWithoutTagInputSchema;
