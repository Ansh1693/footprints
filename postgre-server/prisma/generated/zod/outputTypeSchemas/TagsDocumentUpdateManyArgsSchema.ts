import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagsDocumentUpdateManyMutationInputSchema'
import { TagsDocumentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagsDocumentUncheckedUpdateManyInputSchema'
import { TagsDocumentWhereInputSchema } from '../inputTypeSchemas/TagsDocumentWhereInputSchema'

export const TagsDocumentUpdateManyArgsSchema: z.ZodType<Prisma.TagsDocumentUpdateManyArgs> = z.object({
  data: z.union([ TagsDocumentUpdateManyMutationInputSchema,TagsDocumentUncheckedUpdateManyInputSchema ]),
  where: TagsDocumentWhereInputSchema.optional(),
}).strict() ;

export default TagsDocumentUpdateManyArgsSchema;
