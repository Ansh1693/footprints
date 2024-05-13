import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const PinterestDataWhereUniqueInputSchema: z.ZodType<Prisma.PinterestDataWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    documentId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    documentId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  documentId: z.string().optional(),
  AND: z.union([ z.lazy(() => PinterestDataWhereInputSchema),z.lazy(() => PinterestDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PinterestDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PinterestDataWhereInputSchema),z.lazy(() => PinterestDataWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict());

export default PinterestDataWhereUniqueInputSchema;
