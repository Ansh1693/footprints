import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataIncludeSchema } from '../inputTypeSchemas/RedditDataIncludeSchema'
import { RedditDataCreateInputSchema } from '../inputTypeSchemas/RedditDataCreateInputSchema'
import { RedditDataUncheckedCreateInputSchema } from '../inputTypeSchemas/RedditDataUncheckedCreateInputSchema'
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

export const RedditDataCreateArgsSchema: z.ZodType<Prisma.RedditDataCreateArgs> = z.object({
  select: RedditDataSelectSchema.optional(),
  include: RedditDataIncludeSchema.optional(),
  data: z.union([ RedditDataCreateInputSchema,RedditDataUncheckedCreateInputSchema ]),
}).strict() ;

export default RedditDataCreateArgsSchema;
