import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereInputSchema } from './TagsDocumentWhereInputSchema';

export const TagsDocumentListRelationFilterSchema: z.ZodType<Prisma.TagsDocumentListRelationFilter> = z.object({
  every: z.lazy(() => TagsDocumentWhereInputSchema).optional(),
  some: z.lazy(() => TagsDocumentWhereInputSchema).optional(),
  none: z.lazy(() => TagsDocumentWhereInputSchema).optional()
}).strict();

export default TagsDocumentListRelationFilterSchema;
