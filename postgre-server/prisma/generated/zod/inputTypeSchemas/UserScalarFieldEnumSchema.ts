import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','description','username','profileId','createdAt','updatedAt','UserMetadataId','UserAuthId']);

export default UserScalarFieldEnumSchema;
