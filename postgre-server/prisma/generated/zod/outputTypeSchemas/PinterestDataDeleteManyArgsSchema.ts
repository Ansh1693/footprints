import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataWhereInputSchema } from '../inputTypeSchemas/PinterestDataWhereInputSchema'

export const PinterestDataDeleteManyArgsSchema: z.ZodType<Prisma.PinterestDataDeleteManyArgs> = z.object({
  where: PinterestDataWhereInputSchema.optional(),
}).strict() ;

export default PinterestDataDeleteManyArgsSchema;
