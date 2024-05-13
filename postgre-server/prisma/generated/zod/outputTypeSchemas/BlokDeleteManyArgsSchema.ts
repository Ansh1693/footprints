import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokWhereInputSchema } from '../inputTypeSchemas/BlokWhereInputSchema'

export const BlokDeleteManyArgsSchema: z.ZodType<Prisma.BlokDeleteManyArgs> = z.object({
  where: BlokWhereInputSchema.optional(),
}).strict() ;

export default BlokDeleteManyArgsSchema;
