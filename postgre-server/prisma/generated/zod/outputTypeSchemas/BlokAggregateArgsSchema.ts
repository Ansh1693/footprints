import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokWhereInputSchema } from '../inputTypeSchemas/BlokWhereInputSchema'
import { BlokOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlokOrderByWithRelationInputSchema'
import { BlokWhereUniqueInputSchema } from '../inputTypeSchemas/BlokWhereUniqueInputSchema'

export const BlokAggregateArgsSchema: z.ZodType<Prisma.BlokAggregateArgs> = z.object({
  where: BlokWhereInputSchema.optional(),
  orderBy: z.union([ BlokOrderByWithRelationInputSchema.array(),BlokOrderByWithRelationInputSchema ]).optional(),
  cursor: BlokWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BlokAggregateArgsSchema;
