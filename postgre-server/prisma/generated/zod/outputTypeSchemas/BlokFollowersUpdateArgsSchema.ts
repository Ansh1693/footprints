import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersIncludeSchema } from '../inputTypeSchemas/BlokFollowersIncludeSchema'
import { BlokFollowersUpdateInputSchema } from '../inputTypeSchemas/BlokFollowersUpdateInputSchema'
import { BlokFollowersUncheckedUpdateInputSchema } from '../inputTypeSchemas/BlokFollowersUncheckedUpdateInputSchema'
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

export const BlokFollowersUpdateArgsSchema: z.ZodType<Prisma.BlokFollowersUpdateArgs> = z.object({
  select: BlokFollowersSelectSchema.optional(),
  include: BlokFollowersIncludeSchema.optional(),
  data: z.union([ BlokFollowersUpdateInputSchema,BlokFollowersUncheckedUpdateInputSchema ]),
  where: BlokFollowersWhereUniqueInputSchema,
}).strict() ;

export default BlokFollowersUpdateArgsSchema;
