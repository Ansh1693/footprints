import { z } from 'zod';

export const TagsDocumentScalarFieldEnumSchema = z.enum(['tagId','documentId','createdAt','updatedAt']);

export default TagsDocumentScalarFieldEnumSchema;
