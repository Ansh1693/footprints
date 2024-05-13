import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagsDocumentUncheckedUpdateManyWithoutTagNestedInputSchema } from './TagsDocumentUncheckedUpdateManyWithoutTagNestedInputSchema';

export const TagUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tagName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TagsDocument: z.lazy(() => TagsDocumentUncheckedUpdateManyWithoutTagNestedInputSchema).optional()
}).strict();

export default TagUncheckedUpdateWithoutUserInputSchema;
