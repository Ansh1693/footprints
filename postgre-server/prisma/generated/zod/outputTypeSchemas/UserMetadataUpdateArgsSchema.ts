import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema'
import { UserMetadataUpdateInputSchema } from '../inputTypeSchemas/UserMetadataUpdateInputSchema'
import { UserMetadataUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserMetadataUncheckedUpdateInputSchema'
import { UserMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/UserMetadataWhereUniqueInputSchema'
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

export const UserMetadataUpdateArgsSchema: z.ZodType<Prisma.UserMetadataUpdateArgs> = z.object({
  select: UserMetadataSelectSchema.optional(),
  include: UserMetadataIncludeSchema.optional(),
  data: z.union([ UserMetadataUpdateInputSchema,UserMetadataUncheckedUpdateInputSchema ]),
  where: UserMetadataWhereUniqueInputSchema,
}).strict() ;

export default UserMetadataUpdateArgsSchema;
