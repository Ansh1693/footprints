import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutPinterestDataNestedInputSchema } from './DocumentUpdateOneRequiredWithoutPinterestDataNestedInputSchema';

export const PinterestDataUpdateInputSchema: z.ZodType<Prisma.PinterestDataUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutPinterestDataNestedInputSchema).optional()
}).strict();

export default PinterestDataUpdateInputSchema;
