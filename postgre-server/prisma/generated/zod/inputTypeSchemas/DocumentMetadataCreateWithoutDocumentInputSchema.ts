import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentMetadataCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  documentType: z.string(),
  bodyImageUrl: z.string().optional().nullable(),
  sourceUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentMetadataCreateWithoutDocumentInputSchema;
