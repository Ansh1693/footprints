import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"

export const GoogleAuthIncludeSchema: z.ZodType<Prisma.GoogleAuthInclude> = z.object({
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export default GoogleAuthIncludeSchema;
