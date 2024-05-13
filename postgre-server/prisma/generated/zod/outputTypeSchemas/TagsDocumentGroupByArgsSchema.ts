import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentWhereInputSchema } from '../inputTypeSchemas/TagsDocumentWhereInputSchema'
import { TagsDocumentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TagsDocumentOrderByWithAggregationInputSchema'
import { TagsDocumentScalarFieldEnumSchema } from '../inputTypeSchemas/TagsDocumentScalarFieldEnumSchema'
import { TagsDocumentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TagsDocumentScalarWhereWithAggregatesInputSchema'

export const TagsDocumentGroupByArgsSchema: z.ZodType<Prisma.TagsDocumentGroupByArgs> = z.object({
  where: TagsDocumentWhereInputSchema.optional(),
  orderBy: z.union([ TagsDocumentOrderByWithAggregationInputSchema.array(),TagsDocumentOrderByWithAggregationInputSchema ]).optional(),
  by: TagsDocumentScalarFieldEnumSchema.array(),
  having: TagsDocumentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TagsDocumentGroupByArgsSchema;
