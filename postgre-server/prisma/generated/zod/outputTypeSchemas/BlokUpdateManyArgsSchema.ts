import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokUpdateManyMutationInputSchema } from '../inputTypeSchemas/BlokUpdateManyMutationInputSchema'
import { BlokUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BlokUncheckedUpdateManyInputSchema'
import { BlokWhereInputSchema } from '../inputTypeSchemas/BlokWhereInputSchema'

export const BlokUpdateManyArgsSchema: z.ZodType<Prisma.BlokUpdateManyArgs> = z.object({
  data: z.union([ BlokUpdateManyMutationInputSchema,BlokUncheckedUpdateManyInputSchema ]),
  where: BlokWhereInputSchema.optional(),
}).strict() ;

export default BlokUpdateManyArgsSchema;
