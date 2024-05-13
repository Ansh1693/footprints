import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataIncludeSchema } from '../inputTypeSchemas/PinterestDataIncludeSchema'
import { PinterestDataUpdateInputSchema } from '../inputTypeSchemas/PinterestDataUpdateInputSchema'
import { PinterestDataUncheckedUpdateInputSchema } from '../inputTypeSchemas/PinterestDataUncheckedUpdateInputSchema'
import { PinterestDataWhereUniqueInputSchema } from '../inputTypeSchemas/PinterestDataWhereUniqueInputSchema'
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

export const PinterestDataUpdateArgsSchema: z.ZodType<Prisma.PinterestDataUpdateArgs> = z.object({
  select: PinterestDataSelectSchema.optional(),
  include: PinterestDataIncludeSchema.optional(),
  data: z.union([ PinterestDataUpdateInputSchema,PinterestDataUncheckedUpdateInputSchema ]),
  where: PinterestDataWhereUniqueInputSchema,
}).strict() ;

export default PinterestDataUpdateArgsSchema;
