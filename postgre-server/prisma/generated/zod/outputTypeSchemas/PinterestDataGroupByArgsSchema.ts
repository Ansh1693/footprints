import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataWhereInputSchema } from '../inputTypeSchemas/PinterestDataWhereInputSchema'
import { PinterestDataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PinterestDataOrderByWithAggregationInputSchema'
import { PinterestDataScalarFieldEnumSchema } from '../inputTypeSchemas/PinterestDataScalarFieldEnumSchema'
import { PinterestDataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PinterestDataScalarWhereWithAggregatesInputSchema'

export const PinterestDataGroupByArgsSchema: z.ZodType<Prisma.PinterestDataGroupByArgs> = z.object({
  where: PinterestDataWhereInputSchema.optional(),
  orderBy: z.union([ PinterestDataOrderByWithAggregationInputSchema.array(),PinterestDataOrderByWithAggregationInputSchema ]).optional(),
  by: PinterestDataScalarFieldEnumSchema.array(),
  having: PinterestDataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PinterestDataGroupByArgsSchema;
