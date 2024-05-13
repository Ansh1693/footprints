import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema } from './TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema';

export const TagsDocumentUpdateWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUpdateWithoutDocumentInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Tag: z.lazy(() => TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema).optional()
}).strict();

export default TagsDocumentUpdateWithoutDocumentInputSchema;
