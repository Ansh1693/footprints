import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokMetadataCreateManyInputSchema: z.ZodType<Prisma.BlokMetadataCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  blokHeader: z.string(),
  blokId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BlokMetadataCreateManyInputSchema;
