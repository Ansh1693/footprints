import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BloksDocumentBlokIdDocumentIdCompoundUniqueInputSchema: z.ZodType<Prisma.BloksDocumentBlokIdDocumentIdCompoundUniqueInput> = z.object({
  blokId: z.string(),
  documentId: z.string()
}).strict();

export default BloksDocumentBlokIdDocumentIdCompoundUniqueInputSchema;
