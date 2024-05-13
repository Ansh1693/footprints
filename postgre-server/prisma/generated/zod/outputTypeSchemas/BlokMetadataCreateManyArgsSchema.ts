import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataCreateManyInputSchema } from '../inputTypeSchemas/BlokMetadataCreateManyInputSchema'

export const BlokMetadataCreateManyArgsSchema: z.ZodType<Prisma.BlokMetadataCreateManyArgs> = z.object({
  data: z.union([ BlokMetadataCreateManyInputSchema,BlokMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BlokMetadataCreateManyArgsSchema;
