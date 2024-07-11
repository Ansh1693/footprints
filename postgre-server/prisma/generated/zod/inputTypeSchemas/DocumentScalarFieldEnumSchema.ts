import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','userId','profileId','heading','body','public','deleted','pinned','comment','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
