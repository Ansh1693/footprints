import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PinterestDataIncludeSchema } from '../inputTypeSchemas/PinterestDataIncludeSchema'
import { PinterestDataWhereInputSchema } from '../inputTypeSchemas/PinterestDataWhereInputSchema'
import { PinterestDataOrderByWithRelationInputSchema } from '../inputTypeSchemas/PinterestDataOrderByWithRelationInputSchema'
import { PinterestDataWhereUniqueInputSchema } from '../inputTypeSchemas/PinterestDataWhereUniqueInputSchema'
import { PinterestDataScalarFieldEnumSchema } from '../inputTypeSchemas/PinterestDataScalarFieldEnumSchema'
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

export const PinterestDataFindFirstArgsSchema: z.ZodType<Prisma.PinterestDataFindFirstArgs> = z.object({
  select: PinterestDataSelectSchema.optional(),
  include: PinterestDataIncludeSchema.optional(),
  where: PinterestDataWhereInputSchema.optional(),
  orderBy: z.union([ PinterestDataOrderByWithRelationInputSchema.array(),PinterestDataOrderByWithRelationInputSchema ]).optional(),
  cursor: PinterestDataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PinterestDataScalarFieldEnumSchema,PinterestDataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PinterestDataFindFirstArgsSchema;
