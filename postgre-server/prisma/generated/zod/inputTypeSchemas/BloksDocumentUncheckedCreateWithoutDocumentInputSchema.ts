import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentUncheckedCreateWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUncheckedCreateWithoutDocumentInput> = z.object({
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BloksDocumentUncheckedCreateWithoutDocumentInputSchema;
