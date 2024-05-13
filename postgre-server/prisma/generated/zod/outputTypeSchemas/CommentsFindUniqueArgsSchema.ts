import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsIncludeSchema } from '../inputTypeSchemas/CommentsIncludeSchema'
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

export const CommentsFindUniqueArgsSchema: z.ZodType<Prisma.CommentsFindUniqueArgs> = z.object({
  select: CommentsSelectSchema.optional(),
  include: CommentsIncludeSchema.optional(),
  where: CommentsWhereUniqueInputSchema,
}).strict() ;

export default CommentsFindUniqueArgsSchema;
