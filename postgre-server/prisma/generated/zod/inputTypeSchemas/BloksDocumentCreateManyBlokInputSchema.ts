import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentCreateManyBlokInputSchema: z.ZodType<Prisma.BloksDocumentCreateManyBlokInput> = z.object({
  documentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BloksDocumentCreateManyBlokInputSchema;
