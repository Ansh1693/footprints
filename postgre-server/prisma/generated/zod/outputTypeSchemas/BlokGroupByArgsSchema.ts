import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokWhereInputSchema } from '../inputTypeSchemas/BlokWhereInputSchema'
import { BlokOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BlokOrderByWithAggregationInputSchema'
import { BlokScalarFieldEnumSchema } from '../inputTypeSchemas/BlokScalarFieldEnumSchema'
import { BlokScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BlokScalarWhereWithAggregatesInputSchema'

export const BlokGroupByArgsSchema: z.ZodType<Prisma.BlokGroupByArgs> = z.object({
  where: BlokWhereInputSchema.optional(),
  orderBy: z.union([ BlokOrderByWithAggregationInputSchema.array(),BlokOrderByWithAggregationInputSchema ]).optional(),
  by: BlokScalarFieldEnumSchema.array(),
  having: BlokScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokGroupByArgsSchema;
