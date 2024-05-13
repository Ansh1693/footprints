import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsIncludeSchema } from '../inputTypeSchemas/CommentsIncludeSchema'
import { CommentsUpdateInputSchema } from '../inputTypeSchemas/CommentsUpdateInputSchema'
import { CommentsUncheckedUpdateInputSchema } from '../inputTypeSchemas/CommentsUncheckedUpdateInputSchema'
import { CommentsWhereUniqueInputSchema } from '../inputTypeSchemas/CommentsWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CommentsSelectSchema: z.ZodType<Prisma.CommentsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  documentId: z.boolean().optional(),
  body: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const CommentsUpdateArgsSchema: z.ZodType<Prisma.CommentsUpdateArgs> = z.object({
  select: CommentsSelectSchema.optional(),
  include: CommentsIncludeSchema.optional(),
  data: z.union([ CommentsUpdateInputSchema,CommentsUncheckedUpdateInputSchema ]),
  where: CommentsWhereUniqueInputSchema,
}).strict() ;

export default CommentsUpdateArgsSchema;
