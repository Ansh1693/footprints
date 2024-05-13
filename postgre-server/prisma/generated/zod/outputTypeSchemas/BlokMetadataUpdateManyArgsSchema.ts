import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataUpdateManyMutationInputSchema } from '../inputTypeSchemas/BlokMetadataUpdateManyMutationInputSchema'
import { BlokMetadataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BlokMetadataUncheckedUpdateManyInputSchema'
import { BlokMetadataWhereInputSchema } from '../inputTypeSchemas/BlokMetadataWhereInputSchema'

export const BlokMetadataUpdateManyArgsSchema: z.ZodType<Prisma.BlokMetadataUpdateManyArgs> = z.object({
  data: z.union([ BlokMetadataUpdateManyMutationInputSchema,BlokMetadataUncheckedUpdateManyInputSchema ]),
  where: BlokMetadataWhereInputSchema.optional(),
}).strict() ;

export default BlokMetadataUpdateManyArgsSchema;
