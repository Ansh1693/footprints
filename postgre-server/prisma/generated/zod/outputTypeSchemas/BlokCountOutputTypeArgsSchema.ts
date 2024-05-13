import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokCountOutputTypeSelectSchema } from './BlokCountOutputTypeSelectSchema';

export const BlokCountOutputTypeArgsSchema: z.ZodType<Prisma.BlokCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BlokCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BlokCountOutputTypeSelectSchema;
