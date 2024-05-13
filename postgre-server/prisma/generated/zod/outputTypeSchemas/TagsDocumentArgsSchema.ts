import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsDocumentSelectSchema } from '../inputTypeSchemas/TagsDocumentSelectSchema';
import { TagsDocumentIncludeSchema } from '../inputTypeSchemas/TagsDocumentIncludeSchema';

export const TagsDocumentArgsSchema: z.ZodType<Prisma.TagsDocumentDefaultArgs> = z.object({
  select: z.lazy(() => TagsDocumentSelectSchema).optional(),
  include: z.lazy(() => TagsDocumentIncludeSchema).optional(),
}).strict();

export default TagsDocumentArgsSchema;
