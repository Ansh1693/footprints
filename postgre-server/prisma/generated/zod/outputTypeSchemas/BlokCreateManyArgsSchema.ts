import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokCreateManyInputSchema } from '../inputTypeSchemas/BlokCreateManyInputSchema'

export const BlokCreateManyArgsSchema: z.ZodType<Prisma.BlokCreateManyArgs> = z.object({
  data: z.union([ BlokCreateManyInputSchema,BlokCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BlokCreateManyArgsSchema;
