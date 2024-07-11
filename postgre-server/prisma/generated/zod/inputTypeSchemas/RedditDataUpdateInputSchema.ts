import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutRedditDataNestedInputSchema } from './DocumentUpdateOneRequiredWithoutRedditDataNestedInputSchema';

export const RedditDataUpdateInputSchema: z.ZodType<Prisma.RedditDataUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Document: z.lazy(() => DocumentUpdateOneRequiredWithoutRedditDataNestedInputSchema).optional()
}).strict();

export default RedditDataUpdateInputSchema;
