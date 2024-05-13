import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataIncludeSchema } from '../inputTypeSchemas/RedditDataIncludeSchema'
import { RedditDataWhereUniqueInputSchema } from '../inputTypeSchemas/RedditDataWhereUniqueInputSchema'
import { RedditDataCreateInputSchema } from '../inputTypeSchemas/RedditDataCreateInputSchema'
import { RedditDataUncheckedCreateInputSchema } from '../inputTypeSchemas/RedditDataUncheckedCreateInputSchema'
import { RedditDataUpdateInputSchema } from '../inputTypeSchemas/RedditDataUpdateInputSchema'
import { RedditDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/RedditDataUncheckedUpdateInputSchema'
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

export const RedditDataUpsertArgsSchema: z.ZodType<Prisma.RedditDataUpsertArgs> = z.object({
  select: RedditDataSelectSchema.optional(),
  include: RedditDataIncludeSchema.optional(),
  where: RedditDataWhereUniqueInputSchema,
  create: z.union([ RedditDataCreateInputSchema,RedditDataUncheckedCreateInputSchema ]),
  update: z.union([ RedditDataUpdateInputSchema,RedditDataUncheckedUpdateInputSchema ]),
}).strict() ;

export default RedditDataUpsertArgsSchema;
