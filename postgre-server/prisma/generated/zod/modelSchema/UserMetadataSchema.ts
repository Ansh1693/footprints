import { z } from 'zod';
import { StatusSchema } from '../inputTypeSchemas/StatusSchema'

/////////////////////////////////////////
// USER METADATA SCHEMA
/////////////////////////////////////////

export const UserMetadataSchema = z.object({
  status: StatusSchema,
  id: z.string().cuid(),
  profileImage: z.string().nullable(),
  profileBanner: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UserMetadata = z.infer<typeof UserMetadataSchema>

export default UserMetadataSchema;
