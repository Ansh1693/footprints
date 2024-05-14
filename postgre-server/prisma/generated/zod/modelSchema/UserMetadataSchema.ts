import { z } from 'zod';

/////////////////////////////////////////
// USER METADATA SCHEMA
/////////////////////////////////////////

export const UserMetadataSchema = z.object({
  id: z.string().cuid(),
  profileImage: z.string().nullable(),
  profileBanner: z.string().nullable(),
  verified: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserMetadata = z.infer<typeof UserMetadataSchema>

export default UserMetadataSchema;
