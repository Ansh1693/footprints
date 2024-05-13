import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentCreateManyInputSchema: z.ZodType<Prisma.BloksDocumentCreateManyInput> = z.object({
  blokId: z.string(),
  documentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BloksDocumentCreateManyInputSchema;
