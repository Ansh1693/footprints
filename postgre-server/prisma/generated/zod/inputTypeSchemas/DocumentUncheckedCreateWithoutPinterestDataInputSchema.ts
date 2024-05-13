import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema } from './CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema } from './RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema';

export const DocumentUncheckedCreateWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutPinterestDataInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  Status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Comments: z.lazy(() => CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema).optional()
}).strict();

export default DocumentUncheckedCreateWithoutPinterestDataInputSchema;
