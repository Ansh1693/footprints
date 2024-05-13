import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataWhereInputSchema } from '../inputTypeSchemas/UserMetadataWhereInputSchema'
import { UserMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserMetadataOrderByWithRelationInputSchema'
import { UserMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/UserMetadataWhereUniqueInputSchema'

export const UserMetadataAggregateArgsSchema: z.ZodType<Prisma.UserMetadataAggregateArgs> = z.object({
  where: UserMetadataWhereInputSchema.optional(),
  orderBy: z.union([ UserMetadataOrderByWithRelationInputSchema.array(),UserMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: UserMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UserMetadataAggregateArgsSchema;
