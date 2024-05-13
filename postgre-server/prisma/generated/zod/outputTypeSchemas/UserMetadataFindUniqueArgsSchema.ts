import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema'
import { UserMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/UserMetadataWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserMetadataSelectSchema: z.ZodType<Prisma.UserMetadataSelect> = z.object({
  id: z.boolean().optional(),
  profileImage: z.boolean().optional(),
  profileBanner: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const UserMetadataFindUniqueArgsSchema: z.ZodType<Prisma.UserMetadataFindUniqueArgs> = z.object({
  select: UserMetadataSelectSchema.optional(),
  include: UserMetadataIncludeSchema.optional(),
  where: UserMetadataWhereUniqueInputSchema,
}).strict() ;

export default UserMetadataFindUniqueArgsSchema;
