import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BlokCountOutputTypeSelectSchema: z.ZodType<Prisma.BlokCountOutputTypeSelect> = z.object({
  BloksDocument: z.boolean().optional(),
  BlokFollowers: z.boolean().optional(),
}).strict();

export default BlokCountOutputTypeSelectSchema;
