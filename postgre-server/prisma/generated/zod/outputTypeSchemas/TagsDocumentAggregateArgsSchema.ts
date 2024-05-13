import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentWhereInputSchema } from '../inputTypeSchemas/TagsDocumentWhereInputSchema'
import { TagsDocumentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TagsDocumentOrderByWithRelationInputSchema'
import { TagsDocumentWhereUniqueInputSchema } from '../inputTypeSchemas/TagsDocumentWhereUniqueInputSchema'

export const TagsDocumentAggregateArgsSchema: z.ZodType<Prisma.TagsDocumentAggregateArgs> = z.object({
  where: TagsDocumentWhereInputSchema.optional(),
  orderBy: z.union([ TagsDocumentOrderByWithRelationInputSchema.array(),TagsDocumentOrderByWithRelationInputSchema ]).optional(),
  cursor: TagsDocumentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TagsDocumentAggregateArgsSchema;
