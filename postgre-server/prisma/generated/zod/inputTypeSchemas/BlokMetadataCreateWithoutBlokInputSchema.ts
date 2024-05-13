import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokMetadataCreateWithoutBlokInputSchema: z.ZodType<Prisma.BlokMetadataCreateWithoutBlokInput> = z.object({
  id: z.string().cuid().optional(),
  blokHeader: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokMetadataCreateWithoutBlokInputSchema;
