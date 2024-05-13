import { z } from 'zod';

/////////////////////////////////////////
// DOCUMENT METADATA SCHEMA
/////////////////////////////////////////

export const DocumentMetadataSchema = z.object({
  id: z.string().cuid(),
  documentId: z.string(),
  documentType: z.string(),
  bodyImageUrl: z.string().nullable(),
  sourceUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DocumentMetadata = z.infer<typeof DocumentMetadataSchema>

export default DocumentMetadataSchema;
