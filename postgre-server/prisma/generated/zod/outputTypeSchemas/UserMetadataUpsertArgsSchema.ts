import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema'
import { UserMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/UserMetadataWhereUniqueInputSchema'
import { UserMetadataCreateInputSchema } from '../inputTypeSchemas/UserMetadataCreateInputSchema'
import { UserMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/UserMetadataUncheckedCreateInputSchema'
import { UserMetadataUpdateInputSchema } from '../inputTypeSchemas/UserMetadataUpdateInputSchema'
import { UserMetadataUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserMetadataUncheckedUpdateInputSchema'
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

export const UserMetadataUpsertArgsSchema: z.ZodType<Prisma.UserMetadataUpsertArgs> = z.object({
  select: UserMetadataSelectSchema.optional(),
  include: UserMetadataIncludeSchema.optional(),
  where: UserMetadataWhereUniqueInputSchema,
  create: z.union([ UserMetadataCreateInputSchema,UserMetadataUncheckedCreateInputSchema ]),
  update: z.union([ UserMetadataUpdateInputSchema,UserMetadataUncheckedUpdateInputSchema ]),
}).strict() ;

export default UserMetadataUpsertArgsSchema;
