import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersWhereInputSchema } from '../inputTypeSchemas/BlokFollowersWhereInputSchema'

export const BlokFollowersDeleteManyArgsSchema: z.ZodType<Prisma.BlokFollowersDeleteManyArgs> = z.object({
  where: BlokFollowersWhereInputSchema.optional(),
}).strict() ;

export default BlokFollowersDeleteManyArgsSchema;
