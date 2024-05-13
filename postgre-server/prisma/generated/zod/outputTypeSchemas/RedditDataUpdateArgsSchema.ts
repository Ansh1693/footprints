import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataIncludeSchema } from '../inputTypeSchemas/RedditDataIncludeSchema'
import { RedditDataUpdateInputSchema } from '../inputTypeSchemas/RedditDataUpdateInputSchema'
import { RedditDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/RedditDataUncheckedUpdateInputSchema'
import { RedditDataWhereUniqueInputSchema } from '../inputTypeSchemas/RedditDataWhereUniqueInputSchema'
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

export const RedditDataUpdateArgsSchema: z.ZodType<Prisma.RedditDataUpdateArgs> = z.object({
  select: RedditDataSelectSchema.optional(),
  include: RedditDataIncludeSchema.optional(),
  data: z.union([ RedditDataUpdateInputSchema,RedditDataUncheckedUpdateInputSchema ]),
  where: RedditDataWhereUniqueInputSchema,
}).strict() ;

export default RedditDataUpdateArgsSchema;
