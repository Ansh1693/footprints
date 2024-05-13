import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthIncludeSchema } from '../inputTypeSchemas/GoogleAuthIncludeSchema'
import { GoogleAuthCreateInputSchema } from '../inputTypeSchemas/GoogleAuthCreateInputSchema'
import { GoogleAuthUncheckedCreateInputSchema } from '../inputTypeSchemas/GoogleAuthUncheckedCreateInputSchema'
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

export const GoogleAuthCreateArgsSchema: z.ZodType<Prisma.GoogleAuthCreateArgs> = z.object({
  select: GoogleAuthSelectSchema.optional(),
  include: GoogleAuthIncludeSchema.optional(),
  data: z.union([ GoogleAuthCreateInputSchema,GoogleAuthUncheckedCreateInputSchema ]),
}).strict() ;

export default GoogleAuthCreateArgsSchema;
