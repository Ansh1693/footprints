import { z } from 'zod';

export const GoogleAuthScalarFieldEnumSchema = z.enum(['id','accessToken','refreshToken','googleId','createdAt','updatedAt']);

export default GoogleAuthScalarFieldEnumSchema;
