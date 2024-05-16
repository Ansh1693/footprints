import { z } from 'zod';

export const UserMetadataScalarFieldEnumSchema = z.enum(['id','userId','profileImage','profileBanner','verified','createdAt','updatedAt']);

export default UserMetadataScalarFieldEnumSchema;
