import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokSelectSchema } from '../inputTypeSchemas/BlokSelectSchema';
import { BlokIncludeSchema } from '../inputTypeSchemas/BlokIncludeSchema';

export const BlokArgsSchema: z.ZodType<Prisma.BlokDefaultArgs> = z.object({
  select: z.lazy(() => BlokSelectSchema).optional(),
  include: z.lazy(() => BlokIncludeSchema).optional(),
}).strict();

export default BlokArgsSchema;
