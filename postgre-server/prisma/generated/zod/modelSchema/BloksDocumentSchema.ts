import { z } from 'zod';

/////////////////////////////////////////
// BLOKS DOCUMENT SCHEMA
/////////////////////////////////////////

export const BloksDocumentSchema = z.object({
  blokId: z.string(),
  documentId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BloksDocument = z.infer<typeof BloksDocumentSchema>

export default BloksDocumentSchema;
