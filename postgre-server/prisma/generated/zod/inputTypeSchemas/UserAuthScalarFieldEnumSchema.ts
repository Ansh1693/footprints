import { z } from 'zod';

export const UserAuthScalarFieldEnumSchema = z.enum(['id','userId','createdAt','updatedAt']);

export default UserAuthScalarFieldEnumSchema;
