import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CommentsUncheckedUpdateManyWithoutDocumentNestedInputSchema } from './CommentsUncheckedUpdateManyWithoutDocumentNestedInputSchema';
import { DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInputSchema } from './DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInputSchema';
import { RedditDataUncheckedUpdateOneWithoutDocumentNestedInputSchema } from './RedditDataUncheckedUpdateOneWithoutDocumentNestedInputSchema';
import { PinterestDataUncheckedUpdateOneWithoutDocumentNestedInputSchema } from './PinterestDataUncheckedUpdateOneWithoutDocumentNestedInputSchema';
import { TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema } from './TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema';
import { BloksDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema } from './BloksDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema';

export const DocumentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.DocumentUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  heading: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  body: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pinned: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Comments: z.lazy(() => CommentsUncheckedUpdateManyWithoutDocumentNestedInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataUncheckedUpdateOneWithoutDocumentNestedInputSchema).optional(),
  PinterestData: z.lazy(() => PinterestDataUncheckedUpdateOneWithoutDocumentNestedInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema).optional()
}).strict();

export default DocumentUncheckedUpdateWithoutUserInputSchema;
