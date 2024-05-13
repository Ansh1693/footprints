import { z } from 'zod';

/////////////////////////////////////////
// BLOK METADATA SCHEMA
/////////////////////////////////////////

export const BlokMetadataSchema = z.object({
  id: z.string().cuid(),
  blokHeader: z.string(),
  blokId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BlokMetadata = z.infer<typeof BlokMetadataSchema>

export default BlokMetadataSchema;
