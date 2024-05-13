import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataIncludeSchema } from '../inputTypeSchemas/PinterestDataIncludeSchema'
import { PinterestDataCreateInputSchema } from '../inputTypeSchemas/PinterestDataCreateInputSchema'
import { PinterestDataUncheckedCreateInputSchema } from '../inputTypeSchemas/PinterestDataUncheckedCreateInputSchema'
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

export const PinterestDataCreateArgsSchema: z.ZodType<Prisma.PinterestDataCreateArgs> = z.object({
  select: PinterestDataSelectSchema.optional(),
  include: PinterestDataIncludeSchema.optional(),
  data: z.union([ PinterestDataCreateInputSchema,PinterestDataUncheckedCreateInputSchema ]),
}).strict() ;

export default PinterestDataCreateArgsSchema;
