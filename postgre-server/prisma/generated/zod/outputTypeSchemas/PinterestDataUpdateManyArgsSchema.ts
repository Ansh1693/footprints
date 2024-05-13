import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataUpdateManyMutationInputSchema } from '../inputTypeSchemas/PinterestDataUpdateManyMutationInputSchema'
import { PinterestDataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PinterestDataUncheckedUpdateManyInputSchema'
import { PinterestDataWhereInputSchema } from '../inputTypeSchemas/PinterestDataWhereInputSchema'

export const PinterestDataUpdateManyArgsSchema: z.ZodType<Prisma.PinterestDataUpdateManyArgs> = z.object({
  data: z.union([ PinterestDataUpdateManyMutationInputSchema,PinterestDataUncheckedUpdateManyInputSchema ]),
  where: PinterestDataWhereInputSchema.optional(),
}).strict() ;

export default PinterestDataUpdateManyArgsSchema;
