import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const DocumentMetadataCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  documentType: z.string(),
  url: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentMetadataCreateWithoutDocumentInputSchema;
