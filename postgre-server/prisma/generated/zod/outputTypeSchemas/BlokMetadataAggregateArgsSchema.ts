import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataWhereInputSchema } from '../inputTypeSchemas/BlokMetadataWhereInputSchema'
import { BlokMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlokMetadataOrderByWithRelationInputSchema'
import { BlokMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/BlokMetadataWhereUniqueInputSchema'

export const BlokMetadataAggregateArgsSchema: z.ZodType<Prisma.BlokMetadataAggregateArgs> = z.object({
  where: BlokMetadataWhereInputSchema.optional(),
  orderBy: z.union([ BlokMetadataOrderByWithRelationInputSchema.array(),BlokMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: BlokMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokMetadataAggregateArgsSchema;
