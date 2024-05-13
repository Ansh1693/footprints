import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentCreateManyDocumentInputSchema: z.ZodType<Prisma.BloksDocumentCreateManyDocumentInput> = z.object({
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BloksDocumentCreateManyDocumentInputSchema;
