import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataWhereInputSchema } from '../inputTypeSchemas/PinterestDataWhereInputSchema'
import { PinterestDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/PinterestDataOrderByWithRelationInputSchema'
import { PinterestDataWhereUniqueInputSchema } from '../inputTypeSchemas/PinterestDataWhereUniqueInputSchema'

export const PinterestDataAggregateArgsSchema: z.ZodType<Prisma.PinterestDataAggregateArgs> = z.object({
  where: PinterestDataWhereInputSchema.optional(),
  orderBy: z.union([ PinterestDataOrderByWithRelationInputSchema.array(),PinterestDataOrderByWithRelationInputSchema ]).optional(),
  cursor: PinterestDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PinterestDataAggregateArgsSchema;
