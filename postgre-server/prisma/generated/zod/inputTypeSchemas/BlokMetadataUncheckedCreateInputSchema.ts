import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokMetadataUncheckedCreateInputSchema: z.ZodType<Prisma.BlokMetadataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  blokHeader: z.string(),
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokMetadataUncheckedCreateInputSchema;
