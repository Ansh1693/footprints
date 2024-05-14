import { z } from 'zod';

export const UserMetadataScalarFieldEnumSchema = z.enum(['id','profileImage','profileBanner','verified','createdAt','updatedAt']);

export default UserMetadataScalarFieldEnumSchema;
