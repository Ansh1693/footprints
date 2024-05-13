import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const BlokFollowersIncludeSchema: z.ZodType<Prisma.BlokFollowersInclude> = z.object({
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default BlokFollowersIncludeSchema;
