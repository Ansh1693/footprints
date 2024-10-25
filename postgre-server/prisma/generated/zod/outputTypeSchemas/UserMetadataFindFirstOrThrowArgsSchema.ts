import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema'
import { UserMetadataWhereInputSchema } from '../inputTypeSchemas/UserMetadataWhereInputSchema'
import { UserMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserMetadataOrderByWithRelationInputSchema'
import { UserMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/UserMetadataWhereUniqueInputSchema'
import { UserMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/UserMetadataScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserMetadataSelectSchema: z.ZodType<Prisma.UserMetadataSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  profileBanner: z.boolean().optional(),
  verified: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserMetadataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserMetadataFindFirstOrThrowArgs> = z.object({
  select: UserMetadataSelectSchema.optional(),
  include: UserMetadataIncludeSchema.optional(),
  where: UserMetadataWhereInputSchema.optional(),
  orderBy: z.union([ UserMetadataOrderByWithRelationInputSchema.array(),UserMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: UserMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserMetadataScalarFieldEnumSchema,UserMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default UserMetadataFindFirstOrThrowArgsSchema;
