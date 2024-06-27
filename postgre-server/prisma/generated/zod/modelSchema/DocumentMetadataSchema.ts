import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// DOCUMENT METADATA SCHEMA
/////////////////////////////////////////

export const DocumentMetadataSchema = z.object({
  id: z.string().cuid(),
  documentId: z.string(),
  documentType: z.string(),
  url: JsonValueSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DocumentMetadata = z.infer<typeof DocumentMetadataSchema>

export default DocumentMetadataSchema;
