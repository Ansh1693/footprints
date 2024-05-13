import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const PinterestDataWhereInputSchema: z.ZodType<Prisma.PinterestDataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PinterestDataWhereInputSchema),z.lazy(() => PinterestDataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PinterestDataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PinterestDataWhereInputSchema),z.lazy(() => PinterestDataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict();

export default PinterestDataWhereInputSchema;
