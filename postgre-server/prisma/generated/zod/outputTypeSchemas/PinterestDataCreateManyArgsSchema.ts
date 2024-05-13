import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataCreateManyInputSchema } from '../inputTypeSchemas/PinterestDataCreateManyInputSchema'

export const PinterestDataCreateManyArgsSchema: z.ZodType<Prisma.PinterestDataCreateManyArgs> = z.object({
  data: z.union([ PinterestDataCreateManyInputSchema,PinterestDataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PinterestDataCreateManyArgsSchema;
