import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema } from './TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema';
import { TagsDocumentWhereInputSchema } from './TagsDocumentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const TagsDocumentWhereUniqueInputSchema: z.ZodType<Prisma.TagsDocumentWhereUniqueInput> = z.object({
  tagId_documentId: z.lazy(() => TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema)
})
.and(z.object({
  tagId_documentId: z.lazy(() => TagsDocumentTagIdDocumentIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TagsDocumentWhereInputSchema),z.lazy(() => TagsDocumentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsDocumentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsDocumentWhereInputSchema),z.lazy(() => TagsDocumentWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict());

export default TagsDocumentWhereUniqueInputSchema;
