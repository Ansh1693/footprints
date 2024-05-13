import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersIncludeSchema } from '../inputTypeSchemas/BlokFollowersIncludeSchema'
import { BlokFollowersWhereInputSchema } from '../inputTypeSchemas/BlokFollowersWhereInputSchema'
import { BlokFollowersOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlokFollowersOrderByWithRelationInputSchema'
import { BlokFollowersWhereUniqueInputSchema } from '../inputTypeSchemas/BlokFollowersWhereUniqueInputSchema'
import { BlokFollowersScalarFieldEnumSchema } from '../inputTypeSchemas/BlokFollowersScalarFieldEnumSchema'
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlokFollowersSelectSchema: z.ZodType<Prisma.BlokFollowersSelect> = z.object({
  blokId: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const BlokFollowersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BlokFollowersFindFirstOrThrowArgs> = z.object({
  select: BlokFollowersSelectSchema.optional(),
  include: BlokFollowersIncludeSchema.optional(),
  where: BlokFollowersWhereInputSchema.optional(),
  orderBy: z.union([ BlokFollowersOrderByWithRelationInputSchema.array(),BlokFollowersOrderByWithRelationInputSchema ]).optional(),
  cursor: BlokFollowersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlokFollowersScalarFieldEnumSchema,BlokFollowersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BlokFollowersFindFirstOrThrowArgsSchema;
