import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema } from './TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema';
import { DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema } from './DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema';

export const TagsDocumentUpdateInputSchema: z.ZodType<Prisma.TagsDocumentUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Tag: z.lazy(() => TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema).optional()
}).strict();

export default TagsDocumentUpdateInputSchema;
