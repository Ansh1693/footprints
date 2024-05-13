import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersWhereInputSchema } from '../inputTypeSchemas/BlokFollowersWhereInputSchema'
import { BlokFollowersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BlokFollowersOrderByWithAggregationInputSchema'
import { BlokFollowersScalarFieldEnumSchema } from '../inputTypeSchemas/BlokFollowersScalarFieldEnumSchema'
import { BlokFollowersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BlokFollowersScalarWhereWithAggregatesInputSchema'

export const BlokFollowersGroupByArgsSchema: z.ZodType<Prisma.BlokFollowersGroupByArgs> = z.object({
  where: BlokFollowersWhereInputSchema.optional(),
  orderBy: z.union([ BlokFollowersOrderByWithAggregationInputSchema.array(),BlokFollowersOrderByWithAggregationInputSchema ]).optional(),
  by: BlokFollowersScalarFieldEnumSchema.array(),
  having: BlokFollowersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokFollowersGroupByArgsSchema;
