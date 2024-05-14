import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema } from './CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema } from './RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema';
import { PinterestDataUncheckedCreateNestedOneWithoutDocumentInputSchema } from './PinterestDataUncheckedCreateNestedOneWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema';

export const DocumentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  pinned: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Comments: z.lazy(() => CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataUncheckedCreateNestedOneWithoutDocumentInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema).optional(),
  PinterestData: z.lazy(() => PinterestDataUncheckedCreateNestedOneWithoutDocumentInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema).optional()
}).strict();

export default DocumentUncheckedCreateWithoutUserInputSchema;
