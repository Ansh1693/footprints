import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthIncludeSchema } from '../inputTypeSchemas/GoogleAuthIncludeSchema'
import { GoogleAuthWhereInputSchema } from '../inputTypeSchemas/GoogleAuthWhereInputSchema'
import { GoogleAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/GoogleAuthOrderByWithRelationInputSchema'
import { GoogleAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleAuthWhereUniqueInputSchema'
import { GoogleAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleAuthScalarFieldEnumSchema'
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GoogleAuthSelectSchema: z.ZodType<Prisma.GoogleAuthSelect> = z.object({
  id: z.boolean().optional(),
  userAuthId: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  googleId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
}).strict()

export const GoogleAuthFindFirstArgsSchema: z.ZodType<Prisma.GoogleAuthFindFirstArgs> = z.object({
  select: GoogleAuthSelectSchema.optional(),
  include: GoogleAuthIncludeSchema.optional(),
  where: GoogleAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleAuthOrderByWithRelationInputSchema.array(),GoogleAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GoogleAuthScalarFieldEnumSchema,GoogleAuthScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default GoogleAuthFindFirstArgsSchema;
