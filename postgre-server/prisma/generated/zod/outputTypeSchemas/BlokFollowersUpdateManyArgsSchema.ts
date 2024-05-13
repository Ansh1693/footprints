import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersUpdateManyMutationInputSchema } from '../inputTypeSchemas/BlokFollowersUpdateManyMutationInputSchema'
import { BlokFollowersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BlokFollowersUncheckedUpdateManyInputSchema'
import { BlokFollowersWhereInputSchema } from '../inputTypeSchemas/BlokFollowersWhereInputSchema'

export const BlokFollowersUpdateManyArgsSchema: z.ZodType<Prisma.BlokFollowersUpdateManyArgs> = z.object({
  data: z.union([ BlokFollowersUpdateManyMutationInputSchema,BlokFollowersUncheckedUpdateManyInputSchema ]),
  where: BlokFollowersWhereInputSchema.optional(),
}).strict() ;

export default BlokFollowersUpdateManyArgsSchema;
