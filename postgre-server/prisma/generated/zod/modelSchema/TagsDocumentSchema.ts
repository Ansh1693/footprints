import { z } from 'zod';

/////////////////////////////////////////
// TAGS DOCUMENT SCHEMA
/////////////////////////////////////////

export const TagsDocumentSchema = z.object({
  tagId: z.string(),
  documentId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TagsDocument = z.infer<typeof TagsDocumentSchema>

export default TagsDocumentSchema;
