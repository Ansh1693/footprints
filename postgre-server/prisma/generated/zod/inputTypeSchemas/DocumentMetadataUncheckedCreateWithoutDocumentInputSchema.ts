import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentMetadataUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataUncheckedCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  documentType: z.string(),
  bodyImageUrl: z.string().optional().nullable(),
  sourceUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentMetadataUncheckedCreateWithoutDocumentInputSchema;
