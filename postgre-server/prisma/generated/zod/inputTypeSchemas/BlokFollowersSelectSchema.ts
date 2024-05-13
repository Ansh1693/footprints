import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const BlokFollowersSelectSchema: z.ZodType<Prisma.BlokFollowersSelect> = z.object({
  blokId: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default BlokFollowersSelectSchema;
