import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentWhereInputSchema } from '../inputTypeSchemas/TagsDocumentWhereInputSchema'

export const TagsDocumentDeleteManyArgsSchema: z.ZodType<Prisma.TagsDocumentDeleteManyArgs> = z.object({
  where: TagsDocumentWhereInputSchema.optional(),
}).strict() ;

export default TagsDocumentDeleteManyArgsSchema;
