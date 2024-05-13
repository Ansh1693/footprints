import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthWhereInputSchema } from '../inputTypeSchemas/UserAuthWhereInputSchema'
import { UserAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserAuthOrderByWithRelationInputSchema'
import { UserAuthWhereUniqueInputSchema } from '../inputTypeSchemas/UserAuthWhereUniqueInputSchema'

export const UserAuthAggregateArgsSchema: z.ZodType<Prisma.UserAuthAggregateArgs> = z.object({
  where: UserAuthWhereInputSchema.optional(),
  orderBy: z.union([ UserAuthOrderByWithRelationInputSchema.array(),UserAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: UserAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserAuthAggregateArgsSchema;
