import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataIncludeSchema } from '../inputTypeSchemas/RedditDataIncludeSchema'
import { RedditDataWhereInputSchema } from '../inputTypeSchemas/RedditDataWhereInputSchema'
import { RedditDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/RedditDataOrderByWithRelationInputSchema'
import { RedditDataWhereUniqueInputSchema } from '../inputTypeSchemas/RedditDataWhereUniqueInputSchema'
import { RedditDataScalarFieldEnumSchema } from '../inputTypeSchemas/RedditDataScalarFieldEnumSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RedditDataSelectSchema: z.ZodType<Prisma.RedditDataSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  postId: z.boolean().optional(),
  documentId: z.boolean().optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const RedditDataFindManyArgsSchema: z.ZodType<Prisma.RedditDataFindManyArgs> = z.object({
  select: RedditDataSelectSchema.optional(),
  include: RedditDataIncludeSchema.optional(),
  where: RedditDataWhereInputSchema.optional(),
  orderBy: z.union([ RedditDataOrderByWithRelationInputSchema.array(),RedditDataOrderByWithRelationInputSchema ]).optional(),
  cursor: RedditDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RedditDataScalarFieldEnumSchema,RedditDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RedditDataFindManyArgsSchema;
