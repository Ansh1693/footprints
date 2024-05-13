import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataIncludeSchema } from '../inputTypeSchemas/PinterestDataIncludeSchema'
import { PinterestDataWhereUniqueInputSchema } from '../inputTypeSchemas/PinterestDataWhereUniqueInputSchema'
import { PinterestDataCreateInputSchema } from '../inputTypeSchemas/PinterestDataCreateInputSchema'
import { PinterestDataUncheckedCreateInputSchema } from '../inputTypeSchemas/PinterestDataUncheckedCreateInputSchema'
import { PinterestDataUpdateInputSchema } from '../inputTypeSchemas/PinterestDataUpdateInputSchema'
import { PinterestDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/PinterestDataUncheckedUpdateInputSchema'
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PinterestDataSelectSchema: z.ZodType<Prisma.PinterestDataSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  postId: z.boolean().optional(),
  documentId: z.boolean().optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export const PinterestDataUpsertArgsSchema: z.ZodType<Prisma.PinterestDataUpsertArgs> = z.object({
  select: PinterestDataSelectSchema.optional(),
  include: PinterestDataIncludeSchema.optional(),
  where: PinterestDataWhereUniqueInputSchema,
  create: z.union([ PinterestDataCreateInputSchema,PinterestDataUncheckedCreateInputSchema ]),
  update: z.union([ PinterestDataUpdateInputSchema,PinterestDataUncheckedUpdateInputSchema ]),
}).strict() ;

export default PinterestDataUpsertArgsSchema;
