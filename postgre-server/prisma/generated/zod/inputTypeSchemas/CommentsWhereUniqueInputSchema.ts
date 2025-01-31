import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereInputSchema } from './CommentsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { DocumentRelationFilterSchema } from './DocumentRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const CommentsWhereUniqueInputSchema: z.ZodType<Prisma.CommentsWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CommentsWhereInputSchema),z.lazy(() => CommentsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CommentsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CommentsWhereInputSchema),z.lazy(() => CommentsWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  Document: z.union([ z.lazy(() => DocumentRelationFilterSchema),z.lazy(() => DocumentWhereInputSchema) ]).optional(),
}).strict());

export default CommentsWhereUniqueInputSchema;
