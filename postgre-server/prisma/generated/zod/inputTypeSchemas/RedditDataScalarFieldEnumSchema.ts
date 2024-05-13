import { z } from 'zod';

export const RedditDataScalarFieldEnumSchema = z.enum(['id','username','postId','documentId']);

export default RedditDataScalarFieldEnumSchema;
