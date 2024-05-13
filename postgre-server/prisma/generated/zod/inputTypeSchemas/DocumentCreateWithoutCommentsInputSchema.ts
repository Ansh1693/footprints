import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutDocumentInputSchema } from './UserCreateNestedOneWithoutDocumentInputSchema';
import { DocumentMetadataCreateNestedOneWithoutDocumentInputSchema } from './DocumentMetadataCreateNestedOneWithoutDocumentInputSchema';
import { RedditDataCreateNestedOneWithoutDocumentInputSchema } from './RedditDataCreateNestedOneWithoutDocumentInputSchema';
import { PinterestDataCreateNestedOneWithoutDocumentInputSchema } from './PinterestDataCreateNestedOneWithoutDocumentInputSchema';
import { TagsDocumentCreateNestedManyWithoutDocumentInputSchema } from './TagsDocumentCreateNestedManyWithoutDocumentInputSchema';
import { BloksDocumentCreateNestedManyWithoutDocumentInputSchema } from './BloksDocumentCreateNestedManyWithoutDocumentInputSchema';

export const DocumentCreateWithoutCommentsInputSchema: z.ZodType<Prisma.DocumentCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  Status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutDocumentInputSchema),
  DocumentMetadata: z.lazy(() => DocumentMetadataCreateNestedOneWithoutDocumentInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataCreateNestedOneWithoutDocumentInputSchema).optional(),
  PinterestData: z.lazy(() => PinterestDataCreateNestedOneWithoutDocumentInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentCreateNestedManyWithoutDocumentInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentCreateNestedManyWithoutDocumentInputSchema).optional()
}).strict();

export default DocumentCreateWithoutCommentsInputSchema;
