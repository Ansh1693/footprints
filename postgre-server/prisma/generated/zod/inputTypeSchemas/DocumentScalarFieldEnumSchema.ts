import { z } from 'zod';

export const DocumentScalarFieldEnumSchema = z.enum(['id','userId','heading','body','Status','createdAt','updatedAt']);

export default DocumentScalarFieldEnumSchema;
