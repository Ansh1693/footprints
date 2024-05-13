import { z } from 'zod';

export const UserMetadataScalarFieldEnumSchema = z.enum(['id','profileImage','profileBanner','status','createdAt','updatedAt']);

export default UserMetadataScalarFieldEnumSchema;
