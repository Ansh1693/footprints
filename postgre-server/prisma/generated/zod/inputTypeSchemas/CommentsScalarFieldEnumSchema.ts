import { z } from 'zod';

export const CommentsScalarFieldEnumSchema = z.enum(['id','userId','documentId','body','createdAt','updatedAt']);

export default CommentsScalarFieldEnumSchema;
