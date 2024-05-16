import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema'
import { UserMetadataCreateInputSchema } from '../inputTypeSchemas/UserMetadataCreateInputSchema'
import { UserMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/UserMetadataUncheckedCreateInputSchema'
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

export const UserMetadataCreateArgsSchema: z.ZodType<Prisma.UserMetadataCreateArgs> = z.object({
  select: UserMetadataSelectSchema.optional(),
  include: UserMetadataIncludeSchema.optional(),
  data: z.union([ UserMetadataCreateInputSchema,UserMetadataUncheckedCreateInputSchema ]),
}).strict() ;

export default UserMetadataCreateArgsSchema;
