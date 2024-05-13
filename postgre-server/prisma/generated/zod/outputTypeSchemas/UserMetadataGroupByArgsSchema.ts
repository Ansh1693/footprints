import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataWhereInputSchema } from '../inputTypeSchemas/UserMetadataWhereInputSchema'
import { UserMetadataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UserMetadataOrderByWithAggregationInputSchema'
import { UserMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/UserMetadataScalarFieldEnumSchema'
import { UserMetadataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UserMetadataScalarWhereWithAggregatesInputSchema'

export const UserMetadataGroupByArgsSchema: z.ZodType<Prisma.UserMetadataGroupByArgs> = z.object({
  where: UserMetadataWhereInputSchema.optional(),
  orderBy: z.union([ UserMetadataOrderByWithAggregationInputSchema.array(),UserMetadataOrderByWithAggregationInputSchema ]).optional(),
  by: UserMetadataScalarFieldEnumSchema.array(),
  having: UserMetadataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserMetadataGroupByArgsSchema;
