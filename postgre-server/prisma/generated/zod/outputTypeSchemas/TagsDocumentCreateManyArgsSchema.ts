import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentCreateManyInputSchema } from '../inputTypeSchemas/TagsDocumentCreateManyInputSchema'

export const TagsDocumentCreateManyArgsSchema: z.ZodType<Prisma.TagsDocumentCreateManyArgs> = z.object({
  data: z.union([ TagsDocumentCreateManyInputSchema,TagsDocumentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TagsDocumentCreateManyArgsSchema;
