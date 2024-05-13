import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersIncludeSchema } from '../inputTypeSchemas/BlokFollowersIncludeSchema'
import { BlokFollowersWhereUniqueInputSchema } from '../inputTypeSchemas/BlokFollowersWhereUniqueInputSchema'
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

export const BlokFollowersDeleteArgsSchema: z.ZodType<Prisma.BlokFollowersDeleteArgs> = z.object({
  select: BlokFollowersSelectSchema.optional(),
  include: BlokFollowersIncludeSchema.optional(),
  where: BlokFollowersWhereUniqueInputSchema,
}).strict() ;

export default BlokFollowersDeleteArgsSchema;
