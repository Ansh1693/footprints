import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataWhereInputSchema } from '../inputTypeSchemas/BlokMetadataWhereInputSchema'

export const BlokMetadataDeleteManyArgsSchema: z.ZodType<Prisma.BlokMetadataDeleteManyArgs> = z.object({
  where: BlokMetadataWhereInputSchema.optional(),
}).strict() ;

export default BlokMetadataDeleteManyArgsSchema;
