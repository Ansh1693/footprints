import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthWhereInputSchema } from '../inputTypeSchemas/UserAuthWhereInputSchema'
import { UserAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserAuthOrderByWithAggregationInputSchema'
import { UserAuthScalarFieldEnumSchema } from '../inputTypeSchemas/UserAuthScalarFieldEnumSchema'
import { UserAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserAuthScalarWhereWithAggregatesInputSchema'

export const UserAuthGroupByArgsSchema: z.ZodType<Prisma.UserAuthGroupByArgs> = z.object({
  where: UserAuthWhereInputSchema.optional(),
  orderBy: z.union([ UserAuthOrderByWithAggregationInputSchema.array(),UserAuthOrderByWithAggregationInputSchema ]).optional(),
  by: UserAuthScalarFieldEnumSchema.array(),
  having: UserAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserAuthGroupByArgsSchema;
