import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutDocumentInputSchema } from './UserCreateNestedOneWithoutDocumentInputSchema';
import { CommentsCreateNestedManyWithoutDocumentInputSchema } from './CommentsCreateNestedManyWithoutDocumentInputSchema';
import { DocumentMetadataCreateNestedOneWithoutDocumentInputSchema } from './DocumentMetadataCreateNestedOneWithoutDocumentInputSchema';
import { RedditDataCreateNestedOneWithoutDocumentInputSchema } from './RedditDataCreateNestedOneWithoutDocumentInputSchema';
import { PinterestDataCreateNestedOneWithoutDocumentInputSchema } from './PinterestDataCreateNestedOneWithoutDocumentInputSchema';
import { TagsDocumentCreateNestedManyWithoutDocumentInputSchema } from './TagsDocumentCreateNestedManyWithoutDocumentInputSchema';

export const DocumentCreateWithoutBloksDocumentInputSchema: z.ZodType<Prisma.DocumentCreateWithoutBloksDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  profileId: z.string(),
  heading: z.string().optional().nullable(),
  body: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  pinned: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutDocumentInputSchema),
  Comments: z.lazy(() => CommentsCreateNestedManyWithoutDocumentInputSchema).optional(),
  DocumentMetadata: z.lazy(() => DocumentMetadataCreateNestedOneWithoutDocumentInputSchema).optional(),
  RedditData: z.lazy(() => RedditDataCreateNestedOneWithoutDocumentInputSchema).optional(),
  PinterestData: z.lazy(() => PinterestDataCreateNestedOneWithoutDocumentInputSchema).optional(),
  TagsDocument: z.lazy(() => TagsDocumentCreateNestedManyWithoutDocumentInputSchema).optional()
}).strict();

export default DocumentCreateWithoutBloksDocumentInputSchema;
