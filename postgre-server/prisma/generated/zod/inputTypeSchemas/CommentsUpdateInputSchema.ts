import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCommentsNestedInputSchema } from './UserUpdateOneRequiredWithoutCommentsNestedInputSchema';
import { DocumentUpdateOneRequiredWithoutCommentsNestedInputSchema } from './DocumentUpdateOneRequiredWithoutCommentsNestedInputSchema';

export const CommentsUpdateInputSchema: z.ZodType<Prisma.CommentsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export default CommentsUpdateInputSchema;
