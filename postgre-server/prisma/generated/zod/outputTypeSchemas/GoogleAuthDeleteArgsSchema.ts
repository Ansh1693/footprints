import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthIncludeSchema } from '../inputTypeSchemas/GoogleAuthIncludeSchema'
import { GoogleAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleAuthWhereUniqueInputSchema'
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleAuthSelectSchema: z.ZodType<Prisma.GoogleAuthSelect> = z.object({
  id: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  googleId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export const GoogleAuthDeleteArgsSchema: z.ZodType<Prisma.GoogleAuthDeleteArgs> = z.object({
  select: GoogleAuthSelectSchema.optional(),
  include: GoogleAuthIncludeSchema.optional(),
  where: GoogleAuthWhereUniqueInputSchema,
}).strict() ;

export default GoogleAuthDeleteArgsSchema;
