import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutDocumentMetadataInputSchema } from './DocumentCreateNestedOneWithoutDocumentMetadataInputSchema';

export const DocumentMetadataCreateInputSchema: z.ZodType<Prisma.DocumentMetadataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  documentType: z.string(),
  bodyImageUrl: z.string().optional().nullable(),
  sourceUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutDocumentMetadataInputSchema)
}).strict();

export default DocumentMetadataCreateInputSchema;
