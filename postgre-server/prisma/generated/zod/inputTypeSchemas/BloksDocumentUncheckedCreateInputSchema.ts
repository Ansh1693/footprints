import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentUncheckedCreateInputSchema: z.ZodType<Prisma.BloksDocumentUncheckedCreateInput> = z.object({
  blokId: z.string(),
  documentId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BloksDocumentUncheckedCreateInputSchema;
