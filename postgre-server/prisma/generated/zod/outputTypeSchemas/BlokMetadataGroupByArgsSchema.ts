import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataWhereInputSchema } from '../inputTypeSchemas/BlokMetadataWhereInputSchema'
import { BlokMetadataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BlokMetadataOrderByWithAggregationInputSchema'
import { BlokMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/BlokMetadataScalarFieldEnumSchema'
import { BlokMetadataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BlokMetadataScalarWhereWithAggregatesInputSchema'

export const BlokMetadataGroupByArgsSchema: z.ZodType<Prisma.BlokMetadataGroupByArgs> = z.object({
  where: BlokMetadataWhereInputSchema.optional(),
  orderBy: z.union([ BlokMetadataOrderByWithAggregationInputSchema.array(),BlokMetadataOrderByWithAggregationInputSchema ]).optional(),
  by: BlokMetadataScalarFieldEnumSchema.array(),
  having: BlokMetadataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokMetadataGroupByArgsSchema;
