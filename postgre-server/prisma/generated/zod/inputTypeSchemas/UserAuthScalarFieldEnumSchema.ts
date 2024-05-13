import { z } from 'zod';

export const UserAuthScalarFieldEnumSchema = z.enum(['id','GoogleAuthId','createdAt','updatedAt','RedditAuthId']);

export default UserAuthScalarFieldEnumSchema;
