import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutDocumentNestedInputSchema } from './UserUpdateOneRequiredWithoutDocumentNestedInputSchema';
import { CommentsUpdateManyWithoutDocumentNestedInputSchema } from './CommentsUpdateManyWithoutDocumentNestedInputSchema';
import { DocumentMetadataUpdateOneWithoutDocumentNestedInputSchema } from './DocumentMetadataUpdateOneWithoutDocumentNestedInputSchema';
import { RedditDataUpdateOneWithoutDocumentNestedInputSchema } from './RedditDataUpdateOneWithoutDocumentNestedInputSchema';
import { TagsDocumentUpdateManyWithoutDocumentNestedInputSchema } from './TagsDocumentUpdateManyWithoutDocumentNestedInputSchema';
import { BloksDocumentUpdateManyWithoutDocumentNestedInputSchema } from './BloksDocumentUpdateManyWithoutDocumentNestedInputSchema';

export const DocumentUpdateWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentUpdateWithoutPinterestDataInput> = z.object({
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
  User: z.lazy(() => UserUpdateOneRequiredWithoutDocumentNestedInputSchema).optional(),
  Comments: z.lazy(() => CommentsUpdateManyWithoutDocumentNestedInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataUpdateOneWithoutDocumentNestedInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataUpdateOneWithoutDocumentNestedInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentUpdateManyWithoutDocumentNestedInputSchema).optional(),
  BloksDocument: z.lazy(() => BloksDocumentUpdateManyWithoutDocumentNestedInputSchema).optional()
}).strict();

export default DocumentUpdateWithoutPinterestDataInputSchema;
