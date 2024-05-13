import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataSelectSchema } from '../inputTypeSchemas/PinterestDataSelectSchema';
import { PinterestDataIncludeSchema } from '../inputTypeSchemas/PinterestDataIncludeSchema';

export const PinterestDataArgsSchema: z.ZodType<Prisma.PinterestDataDefaultArgs> = z.object({
  select: z.lazy(() => PinterestDataSelectSchema).optional(),
  include: z.lazy(() => PinterestDataIncludeSchema).optional(),
}).strict();

export default PinterestDataArgsSchema;
