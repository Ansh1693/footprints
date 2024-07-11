import { z } from 'zod';

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  profileId: z.string(),
  heading: z.string().nullable(),
  body: z.string().nullable(),
  public: z.boolean(),
  deleted: z.boolean(),
  pinned: z.boolean(),
  comment: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Document = z.infer<typeof DocumentSchema>

export default DocumentSchema;
