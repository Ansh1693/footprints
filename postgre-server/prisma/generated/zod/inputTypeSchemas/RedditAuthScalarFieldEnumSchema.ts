import { z } from 'zod';

export const RedditAuthScalarFieldEnumSchema = z.enum(['id','userAuthId','accessToken','refreshToken','redditId','redditUsername','createdAt','updatedAt']);

export default RedditAuthScalarFieldEnumSchema;
