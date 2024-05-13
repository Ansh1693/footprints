import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersCreateManyInputSchema } from '../inputTypeSchemas/BlokFollowersCreateManyInputSchema'

export const BlokFollowersCreateManyArgsSchema: z.ZodType<Prisma.BlokFollowersCreateManyArgs> = z.object({
  data: z.union([ BlokFollowersCreateManyInputSchema,BlokFollowersCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BlokFollowersCreateManyArgsSchema;
