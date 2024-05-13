import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DocumentMetadataUncheckedCreateInputSchema: z.ZodType<Prisma.DocumentMetadataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  documentId: z.string(),
  documentType: z.string(),
  bodyImageUrl: z.string().optional().nullable(),
  sourceUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DocumentMetadataUncheckedCreateInputSchema;
