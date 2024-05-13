import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsIncludeSchema } from '../inputTypeSchemas/CommentsIncludeSchema'
import { CommentsWhereInputSchema } from '../inputTypeSchemas/CommentsWhereInputSchema'
import { CommentsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CommentsOrderByWithRelationInputSchema'
import { CommentsWhereUniqueInputSchema } from '../inputTypeSchemas/CommentsWhereUniqueInputSchema'
import { CommentsScalarFieldEnumSchema } from '../inputTypeSchemas/CommentsScalarFieldEnumSchema'
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

export const CommentsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommentsFindFirstOrThrowArgs> = z.object({
  select: CommentsSelectSchema.optional(),
  include: CommentsIncludeSchema.optional(),
  where: CommentsWhereInputSchema.optional(),
  orderBy: z.union([ CommentsOrderByWithRelationInputSchema.array(),CommentsOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommentsScalarFieldEnumSchema,CommentsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CommentsFindFirstOrThrowArgsSchema;
