import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersWhereInputSchema } from '../inputTypeSchemas/BlokFollowersWhereInputSchema'
import { BlokFollowersOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlokFollowersOrderByWithRelationInputSchema'
import { BlokFollowersWhereUniqueInputSchema } from '../inputTypeSchemas/BlokFollowersWhereUniqueInputSchema'

export const BlokFollowersAggregateArgsSchema: z.ZodType<Prisma.BlokFollowersAggregateArgs> = z.object({
  where: BlokFollowersWhereInputSchema.optional(),
  orderBy: z.union([ BlokFollowersOrderByWithRelationInputSchema.array(),BlokFollowersOrderByWithRelationInputSchema ]).optional(),
  cursor: BlokFollowersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokFollowersAggregateArgsSchema;
