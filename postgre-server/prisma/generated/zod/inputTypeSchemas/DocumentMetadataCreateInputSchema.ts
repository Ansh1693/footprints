import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DocumentCreateNestedOneWithoutDocumentMetadataInputSchema } from './DocumentCreateNestedOneWithoutDocumentMetadataInputSchema';

export const DocumentMetadataCreateInputSchema: z.ZodType<Prisma.DocumentMetadataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  documentType: z.string(),
  url: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentMetadataInputSchema)
}).strict();

export default DocumentMetadataCreateInputSchema;
