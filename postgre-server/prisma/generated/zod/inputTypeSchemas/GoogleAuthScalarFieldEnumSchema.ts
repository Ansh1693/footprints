import { z } from 'zod';

export const GoogleAuthScalarFieldEnumSchema = z.enum(['id','userAuthId','accessToken','refreshToken','googleId','createdAt','updatedAt']);

export default GoogleAuthScalarFieldEnumSchema;
