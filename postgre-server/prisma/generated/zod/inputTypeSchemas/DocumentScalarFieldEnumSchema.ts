import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','userId','heading','body','public','deleted','pinned','comment','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
